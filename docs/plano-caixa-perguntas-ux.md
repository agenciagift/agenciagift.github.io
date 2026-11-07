# Plano: caixa de perguntas dentro do site (UX)

> **Status: concluído e publicado em 06/11/2026** (tarefas `gift-caixa-ux-*` encerradas). A seção "Estado final" abaixo vale sobre o texto original do plano; o resto fica como histórico das decisões.

Tarefas no kanban: `gift-caixa-ux-decisoes`, `gift-caixa-ux-construir`, `gift-caixa-ux-testar` (`~/.claude/plans/tarefas.json`). Não é publicado no site (`docs/` está em `exclude`).

## Estado final (06/11/2026)
- **Onde aparece:** fim de cada post e página **Conteúdos** (versão **compacta**, `compacta=true`); página **`/enviar-pergunta/`** (versão completa, fora da navegação). A página **Entrar** mantém um botão que leva a `/enviar-pergunta/`. O include antigo `caixa-perguntas.html` (botão) foi removido.
- **Compacta:** nasce só com título e uma caixa de texto (sem selo, introdução, assuntos nem botão); ao focar no campo, expande com transição (altura do campo e fade do resto) e rola até o botão. Só recolhe ao **clicar fora** da caixa, e apenas se estiver vazia, sem assunto e sem erro; depois do envio, clicar fora volta ao estado inicial. Sem JavaScript aparece completa.
- **Envio:** iframe oculto com `sandbox="allow-forms"`; confirmação otimista (o site não lê a resposta do Google). Antes de 3 s na página o envio espera em silêncio e sai sozinho. Honeypot, intervalo de 30 s (`localStorage`), 1000 caracteres, sem internet e demora de 15 s tratados com o link do formulário original como reserva.
- **Assunto:** opção única (rádio) e opcional; clicar na opção marcada desmarca. Contador só aparece a partir de 800 caracteres. Ctrl/Cmd+Enter envia.
- **Métrica (GoatCounter):** `caixa-aberta` (primeiro foco) e `caixa-enviada` (sem texto).
- **Configuração:** `_config.yml` guarda `caixa_perguntas_form_url`, `caixa_perguntas_campo_pergunta`, `caixa_perguntas_campo_assunto` e `caixa_perguntas_url` (reserva). As opções de assunto ficam no include.
- **Conferência:** `python3 scripts/conferir-caixa.py` compara os códigos `entry` e as opções do Forms público com o site; rodar antes de publicar e na checagem semanal.
- **Cuidado de código:** o layout `compress.html` junta tudo em uma linha; no `<script>` só comentários `/* */` e sempre ponto e vírgula.
- **Divulgação:** anúncios e mensagens usam `https://agenciagift.github.io/enviar-pergunta/` (não o `forms.gle`); a mensagem fixada em `docs/mensagens-fixadas.md` já usa o link do site.
- **Teste real:** feito em 06/11 ("[TESTE] ignorar" chegou à planilha e foi apagado). Os eventos do GoatCounter só aparecem com uso real na versão publicada.

## Objetivo
Hoje o botão "Perguntar sem se identificar" leva a um Google Form em outra aba. Cada salto perde gente, justamente de quem tem vergonha de perguntar. Meta: **a pessoa escreve a pergunta na própria página, envia, vê uma confirmação e continua lendo**, sem sair do site e sem login. A caixa de perguntas segue anônima (nenhum nome, e-mail ou conta).

## Como está hoje (verificado em 06/11/2026)
Formulário "Caixa de perguntas anônima", sem login, 2 campos:

| Campo | Tipo | Obrigatório | Nome do campo no envio |
|---|---|---|---|
| Qual é a sua pergunta? | texto longo | **sim** | `entry.1668903380` |
| Sobre o quê é? | escolha única | não | `entry.2140007107` |

Opções de "Sobre o quê é?" (texto exato, o Forms rejeita valor diferente): Estudo (por onde começar) · Carreira, currículo e entrevistas · Código e ferramentas · Inglês para tecnologia · Inteligência artificial · Outro assunto.
Endereço de envio: `https://docs.google.com/forms/d/e/<ID do formulário>/formResponse` (o ID já é público no link do site). Campos ocultos do Forms: `fvv=1`, `pageHistory=0` (`fbzx` e `partialResponse` não são necessários).

## Como funciona a técnica
1. Um `<form method="POST" action=".../formResponse">` com os mesmos nomes de campo, na própria página.
2. Um `<iframe name="caixa-iframe" hidden>` e o formulário com `target="caixa-iframe"`: o navegador envia o POST para o Google e a resposta carrega **dentro do iframe invisível**, sem sair da página.
3. O JavaScript escuta o `load` do iframe (o primeiro depois do envio): considera enviado, **limpa os campos** e **mostra a confirmação**.

**Limite importante:** a resposta do Google vem de outro domínio, então o site **não consegue ler** o resultado. O `load` dispara também se o Forms recusar o envio ou se a rede cair. Por isso o plano não depende do iframe para validar: valida antes (ver abaixo) e confere os IDs com um script (ver "Riscos").

## Experiência (o que a pessoa vê)
1. **Campos na página:** caixa de texto "Qual é a sua pergunta?" (obrigatória, até 1000 caracteres, contador discreto) e **escolhas em formato de etiquetas** para "Sobre o quê é?" (opcional, as 6 opções). Botão primário **"Enviar pergunta"**.
2. **Aviso curto sob o campo:** "Não pedimos nome nem e-mail. Evite escrever dados pessoais na pergunta."
3. **Ao enviar:** botão vira "Enviando…" e fica desativado (evita envio duplo).
4. **Confirmação no lugar do formulário:** "Pergunta enviada. Obrigado! Respondemos de 3 a 5 por semana, no grupo e no site, sem citar quem perguntou." com o link **"Enviar outra pergunta"** (volta o formulário vazio). O foco do teclado vai para a confirmação e o leitor de tela anuncia (`aria-live="polite"`).
5. **Se der problema** (demora mais de 15 s): mensagem "Não conseguimos confirmar o envio. Tente de novo ou use o formulário original" com o link para o Google Form. O texto digitado é **mantido**.

## Estrutura no código (repositório `agenciagift.github.io`)
- `_includes/caixa-perguntas-form.html`: formulário, iframe, mensagem de confirmação e o script (poucas linhas, sem biblioteca), ao estilo do `post-acoes.html`.
- Estilos em `_sass/_forms.scss` (já existem `textarea`, `button` e `.honeypot`): etiquetas, contador, mensagem de erro e confirmação, usando o primário verde e o contorno amarelo dos botões.
- Valores no `_config.yml`: `caixa_perguntas_form_url` (formResponse) e os dois nomes de campo, para existirem num só lugar.
- Onde aparece (proposta): **inline no fim de cada post** e **na página Entrar**, no lugar do botão atual. Em **Conteúdos** (depois: caixa compacta; ver "Estado final") o botão levava à nova página `enviar-pergunta/`, que não aparece na navegação principal e é dedicada ao acesso direto em vez do link do Google. O link do Google Form fica como reserva em todos os casos.

## Sem JavaScript (degradação)
O formulário nasce **sem** `target` do iframe e com `target="_blank"`; o JavaScript troca para o iframe. Sem JavaScript, o envio abre a confirmação do Google em outra aba (como hoje) e nada quebra. Dentro de `<noscript>`, o link para o formulário original.

## Anti-spam e privacidade
- **Honeypot** (campo escondido `.honeypot`): se vier preenchido, finge sucesso e **não envia**.
- **Tempo mínimo** de 3 s entre abrir a página e enviar, e **intervalo de 30 s** entre envios no mesmo navegador (guardado no `localStorage`, só um horário, sem texto).
- Limite de 1000 caracteres e recusa de envio vazio ou só com espaços.
- Sem CAPTCHA (peso e atrito). Se aparecer abuso, o plano B é voltar ao botão atual.
- **Privacidade:** o site não guarda a pergunta; ela vai direto ao Google Forms (que recebe também dados técnicos de rede, como em qualquer envio). Dizer isso em uma linha no rodapé do formulário: "O envio é recebido pelo Google Forms, sem nome nem e-mail."
- **Métrica sem dado pessoal:** ao confirmar, registrar o evento `caixa-enviada` no GoatCounter (`goatcounter.count({event: true, path: 'caixa-enviada'})`), sem o texto. Mede se a caixa funciona.

## Acessibilidade
Rótulos reais (`<label>`), erros associados ao campo (`aria-invalid`, `aria-describedby`), estado "enviando" com `aria-busy`, confirmação com `aria-live`, foco visível (já padronizado nos botões), alvo de toque de 44 px e etiquetas com `fieldset`/`legend`. Respeitar `prefers-reduced-motion`.

## Riscos e como reduzir
| Risco | Impacto | Mitigação |
|---|---|---|
| Editar o Forms (apagar e recriar pergunta, trocar opção) muda os códigos `entry.N` e o envio falha **em silêncio** | perguntas perdidas sem aviso | script `scripts/conferir-caixa.py` compara os códigos e as opções do Forms público com o `_config.yml`; roda antes de publicar e na checagem semanal |
| O `load` do iframe dispara mesmo se o Google recusar | confirmação falsa | validar no cliente com as mesmas regras do Forms; conferir os códigos (acima); teste real em cada publicação |
| Google mudar o comportamento do `formResponse` | quebra | link do formulário original sempre visível como reserva |
| Spam | encher a planilha | honeypot, tempo e intervalo; plano B é voltar ao botão |
| Pessoa escrever dado pessoal na pergunta | exposição | aviso curto no formulário; as respostas públicas nunca citam quem perguntou (regra já vigente) |

## Alternativa (decisão)
Em vez do iframe, `fetch(url, {method: 'POST', mode: 'no-cors', body: FormData})`: também não lê a resposta, mas **detecta falha de rede** (a promessa rejeita) e dispensa o iframe oculto. É menos código. Recomendo o **iframe como você pediu** (funciona até no navegador mais simples e na degradação sem JavaScript); o `fetch` fica como melhoria se a falha de rede virar problema.

## Teste (antes de publicar)
1. Prévia local: envio válido, vazio, só espaços, honeypot preenchido, duplo clique, duas escolhas seguidas, offline (cortar a rede).
2. `conferir-caixa.py` retornando "ok".
3. **Um envio real de teste** com o texto "[TESTE] ignorar", conferido na planilha. Atenção: isso gera **uma resposta e um e-mail de aviso** que contam como pergunta; o João apaga a linha depois (ou eu marco como teste no acompanhamento).
4. Celular (largura estreita) e navegação só por teclado.
5. Depois de publicar: uma visita real em celular e o evento `caixa-enviada` aparecendo no GoatCounter.

## Decisões do João (aprovadas em 06/11/2026)
1. **Onde mostrar os campos:** inline no fim de cada post e na página Entrar (com edição do João: em Conteúdos o botão leva à página dedicada `enviar-pergunta/`).
2. **Teste real:** aprovado, com 1 resposta de teste "[TESTE] ignorar" na planilha (o João apaga a linha).
3. **Aviso de privacidade:** aprovada a linha "O envio é recebido pelo Google Forms, sem nome nem e-mail".
4. **Iframe ou `fetch`:** iframe, como pedido.

## Página `enviar-pergunta/` (nova)
Página `enviar-pergunta.md` com o mesmo include do formulário, **fora da navegação principal** (sem `menu-title` e sem `position`, para não entrar no menu). É o endereço direto para divulgar e para o botão de Conteúdos. Título "Enviar uma pergunta", uma frase de abertura, o formulário e o link do Google Form como reserva. Incluir no `sitemap`, mas sem `noindex` (a página pode ser achada por busca).

## Esforço
Construir: cerca de 1 sessão curta (include, estilo, script de conferência). Teste e publicação: 15 min do João para o envio real e o aceite do visual.
