---
title: "Sem medo de perguntar: como ler uma mensagem de erro?"
image: /media/error-mess.jpg
image_alt: "Linhas de mensagens de erro em vermelho numa tela escura, todas começando com 'Failed to load resource'"
categories: [sem-medo-de-perguntar]
---
O programa quebrou, apareceu um texto vermelho enorme e dá vontade de fechar tudo. Calma: a mensagem de erro **não é uma bronca**, é uma pista de onde olhar.

## A resposta curta
Uma mensagem de erro costuma dizer **o que deu errado** e **onde**. Aprender a ler essas duas partes resolve boa parte dos problemas.

## O que costuma aparecer
Veja um exemplo de JavaScript:

```text
TypeError: Cannot read properties of undefined (reading 'name')
    at mostrarUsuario (app.js:12:20)
```

- **O tipo e a mensagem:** `TypeError: Cannot read properties of undefined (reading 'name')`. Traduzindo: o código tentou ler `name` de algo que não existe (`undefined`).
- **O lugar:** `app.js:12:20` aponta o arquivo (`app.js`), a linha (12) e a coluna (20).

## Um passo a passo
1. **Respire e leia a primeira linha** com calma. Ela costuma ser a mais importante.
2. **Ache o arquivo e a linha** que aparecem na mensagem e olhe esse trecho.
3. **Pesquise a mensagem**, copiando o texto principal (sem partes que sejam só do seu projeto, como o nome de um arquivo seu).
4. **Teste uma coisa de cada vez**, para saber qual mudança resolveu.
5. **Se travar, peça ajuda com contexto:** o que você queria fazer, o que fez, o que esperava e a mensagem **completa**.

## Cuidado ao pedir ajuda
Antes de colar um erro em um grupo ou site, confira se ele **não mostra senha, chave de acesso, e-mail ou dado pessoal**. Se mostrar, apague essa parte.

## Para praticar
Na próxima vez que algo der erro, em vez de fechar a janela, copie a primeira linha e tente dizer com as suas palavras o que ela quer dizer. Mesmo errando, você está treinando o hábito mais útil de quem programa.

**Ficou alguma dúvida?** Mande a próxima pergunta básica pela caixa de perguntas ou no grupo do WhatsApp. Aqui ninguém é ridicularizado por perguntar o básico.
