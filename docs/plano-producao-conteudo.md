# Plano de produção de conteúdo da Agência Gift

Plano operacional (como produzir e publicar). A estratégia, a pesquisa com os membros e as ofertas ficam em `~/.claude/plans/detalhes/gift.md` e `ofertas.md` (fora deste repositório público). O backlog de temas em vídeo fica no projeto `roteiros-de-video` (`ideias/inbox.md`). Este arquivo não é publicado no site (`docs/` está em `exclude` no `_config.yml`).

## Objetivo
Responder ao que a comunidade pede: **onde e o que estudar, carreira, e um lugar seguro para perguntas básicas**, com constância e pouco tempo (1 h por dia, cerca de 7 h por semana). Todo conteúdo é acolhedor para iniciantes.

## Princípios
1. **Pergunta básica é bem-vinda.** Nenhum conteúdo ridiculariza dúvida; linguagem sem jargão, com uma analogia e um exemplo.
2. **Nada inventado:** fato, número, preço, vaga ou depoimento só com fonte; o que não foi verificado é marcado e não vai ao ar.
3. **Privacidade:** pergunta da caixa anônima nunca cita quem perguntou; história de membro só com consentimento por escrito; sem dado pessoal.
4. **Um conteúdo, muitos formatos:** cada tema vira texto, vídeo curto e cortes, em vez de coisas separadas.
5. **Acessível:** legenda em vídeo, `alt` em imagem, contraste, sem depender de som.

## Categorias do site (as mesmas tags do grupo)
`sem-medo-de-perguntar` · `estudo` (trilhas) · `carreira` · `ingles-ti` · `ia` · `vagas` · `historias` · `eventos`.

## Formatos
| Formato | Duração | Onde publica | Frequência alvo |
|---|---|---|---|
| Post "Sem medo de perguntar" (1 pergunta, 1 resposta) | 300 a 500 palavras | site e grupo | semanal |
| Vídeo curto da mesma pergunta | 3 a 5 min | YouTube (e cortes verticais) | semanal (pode vir 1 semana depois do texto) |
| Mentoria aberta gravada | 30 a 60 min | YouTube + resumo no site | quinzenal |
| Live com tema do backlog | 45 a 60 min | YouTube | mensal |
| Trilha de estudo (guia por objetivo) | 1 página | site | uma por trimestre, revisada a cada trimestre |
| Glossário (verbete curto) | 80 a 150 palavras | site | 1 a 2 por semana, nascem das perguntas |
| Enquete | 1 pergunta | grupo | semanal |
| Vagas | lista | grupo | semanal |
| História de membro | 200 a 400 palavras ou 2 min | site e YouTube | mensal, com consentimento |

## Orçamento de tempo semanal (7 h)
| Atividade | Tempo |
|---|---|
| Caixa de perguntas: ler, escolher, responder 3 a 5 | 1 h |
| Escrever o post da semana e o verbete | 2 h |
| Gravar e editar o vídeo curto (quinzenal alterna com a mentoria gravada) | 2 h |
| Publicar, legendar, cortes e agendar | 1 h |
| Vagas e enquete | 0,5 h |
| Planejar a semana seguinte e revisar métricas | 0,5 h |

Se faltar tempo, corta-se o vídeo curto, nunca a caixa de perguntas: é o que alimenta o resto.

## Pipeline (do tema ao ar)
1. **Entrada:** caixa de perguntas, enquete, pedidos no grupo, backlog do `roteiros-de-video`.
2. **Triagem (sexta):** escolher o tema da semana seguinte; descartar duplicata (consulte o glossário).
3. **Rascunho:** post em `_drafts/` com o front matter abaixo; checagem de fatos e de jargão.
4. **Revisão:** uma pessoa que não escreveu lê como iniciante ("entendi sem pesquisar?").
5. **Publicação:** mover para `_posts/` com a data; conferir o build; avisar no grupo.
6. **Reuso:** gerar o roteiro do vídeo curto no `roteiros-de-video` (briefing → roteiro), publicar e cortar.
7. **Medir (mensal):** perguntas recebidas, posts, visualizações, participação de iniciantes.

Modelo de post:
```yaml
---
title: "O que é uma API?"
categories: [sem-medo-de-perguntar]
cover_image: /img/posts/api.jpg   # opcional; há uma imagem padrão
audio:                           # opcional (episódio em áudio)
---
```
Estrutura do texto: a pergunta como o iniciante faria; resposta em 1 parágrafo; analogia; exemplo mínimo; "onde ir depois" (1 link confiável); convite para mandar a próxima pergunta.

## Calendário do primeiro mês (modelo)
| Semana | Post | Vídeo | Outros |
|---|---|---|---|
| 1 | o que é uma API | gravar a versão curta | lançar caixa de perguntas e regra de acolhimento fixada |
| 2 | o que é Git e por que usar | publicar vídeo 1 | primeira enquete; 1ª mentoria aberta gravada |
| 3 | front-end, back-end e full stack | vídeo 2 | trilha "primeiro emprego" (versão 1) |
| 4 | como ler uma mensagem de erro | vídeo 3 | balanço do mês e pesquisa curta |

Os próximos 10 temas estão no backlog do `roteiros-de-video`.

## Papéis (rodízio de voluntários)
Editor da semana (escolhe o tema), redator, revisor-iniciante, quem responde a caixa, quem cuida de vídeo e legenda. Meta: 2 a 3 pessoas por papel para não depender de uma só (hoje poucos escrevem quase tudo). Quando houver voluntários, listar aqui o papel, sem dados pessoais.

## Checklist antes de publicar
- [ ] Fatos e links conferidos; nada inventado.
- [ ] Sem dado pessoal nem pergunta identificável.
- [ ] Linguagem sem jargão ou jargão explicado.
- [ ] `alt`, legenda e contraste.
- [ ] Build do Jekyll sem erro; links testados.
- [ ] Aviso no grupo com o link.

## Medidas (mensal)
Perguntas recebidas na caixa; posts e vídeos publicados contra o plano; visualizações no YouTube; participação de iniciantes no grupo; resposta à pesquisa "encontrou o que queria?".
