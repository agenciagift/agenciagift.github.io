#!/usr/bin/env python3
"""Confere se o Google Forms público ainda bate com o site (códigos entry e opções).

Editar o Forms (apagar e recriar pergunta, trocar opção) muda os códigos e o envio
falha em silêncio. Rode antes de publicar e na checagem semanal.
Uso: python3 scripts/conferir-caixa.py   (saída 0 = ok, 1 = divergência)
"""
import json
import re
import sys
import urllib.request
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent


def config(chave):
    texto = (RAIZ / "_config.yml").read_text(encoding="utf-8")
    achou = re.search(rf"^{chave}:\s*(\S+)", texto, re.M)
    if not achou:
        sys.exit(f"ERRO: {chave} não está no _config.yml")
    return achou.group(1)


def opcoes_do_site():
    texto = (RAIZ / "_includes" / "caixa-perguntas-form.html").read_text(encoding="utf-8")
    achou = re.search(r'assign assuntos = "([^"]+)"', texto)
    if not achou:
        sys.exit("ERRO: lista de assuntos não encontrada no include")
    return achou.group(1).split("|")


def main():
    url = config("caixa_perguntas_form_url").replace("/formResponse", "/viewform")
    html = urllib.request.urlopen(url, timeout=20).read().decode("utf-8")
    achou = re.search(r"FB_PUBLIC_LOAD_DATA_ = (.*?);</script>", html, re.S)
    if not achou:
        sys.exit("ERRO: não consegui ler o Forms (formato mudou ou formulário fechado)")
    perguntas = json.loads(achou.group(1))[1][1]

    forms = {}
    for q in perguntas:
        entrada = q[4][0]
        opcoes = [o[0] for o in entrada[1]] if entrada[1] else []
        forms[f"entry.{entrada[0]}"] = (q[1], opcoes)

    erros = []
    campo_pergunta = config("caixa_perguntas_campo_pergunta")
    campo_assunto = config("caixa_perguntas_campo_assunto")
    for nome in (campo_pergunta, campo_assunto):
        if nome not in forms:
            erros.append(f"{nome} não existe mais no Forms (existentes: {', '.join(forms)})")
    if campo_assunto in forms and forms[campo_assunto][1] != opcoes_do_site():
        erros.append(f"opções diferentes.\n  Forms: {forms[campo_assunto][1]}\n  Site:  {opcoes_do_site()}")

    if erros:
        print("DIVERGÊNCIA entre o Forms e o site:")
        for e in erros:
            print(" -", e)
        sys.exit(1)
    print("ok: códigos e opções do Forms batem com o site")


if __name__ == "__main__":
    main()
