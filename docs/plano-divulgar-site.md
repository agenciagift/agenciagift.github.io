# Plano de divulgação do site novo

Tarefa `gift-divulgar-site` (`~/.claude/plans/tarefas.json`). Estratégia e canais: `~/.claude/plans/detalhes/gift.md`. Textos prontos: `mensagens-fixadas.md` (seção 5). Não é publicado no site (`docs/` está em `exclude`).

## Objetivo e medida
Levar a comunidade atual ao site (4 posts no ar) e dar ao site o papel de **porta de entrada**: promessa, formulário, YouTube, WhatsApp. Sucesso do primeiro ciclo: visitas vindas do grupo e do YouTube e pelo menos uma pergunta chegando pela caixa anônima. Sem Analytics no site hoje: medir pelo contador de respostas da caixa de perguntas e pelas reações e comentários no grupo (decisão do João se quer instalar métrica).

## Restrições (do plano da Gift)
- Canais que existem: WhatsApp (principal e avisos), YouTube @agenciagift, LinkedIn do João. **Não existe Instagram da comunidade** (o `@agenciagift` da busca é de outra empresa: não divulgar). TikTok e Shorts ficam para depois do sprint (`gift-alcance-externo`).
- Nos textos públicos preferir "ensinar", "mostrar", "ajudar" (evitar "compartilhar").
- Sem preço, oferta paga nem sprint na divulgação. Sem prometer datas ou conteúdos que não existem.
- Tempo do João: 1 h/dia; durante o sprint (09 a 22/11) o tempo é da oferta O1. A divulgação precisa caber em 10 a 15 min por dia.

## Antes de divulgar (checklist)
- [ ] Prévia local revisada pelo João (`bundle exec jekyll serve --livereload`, http://127.0.0.1:4000): home, 4 posts, categorias, RSS.
- [ ] Botão de entrada no WhatsApp ou formulário funcionando; link da caixa de perguntas visível.
- [ ] Imagens dos posts e og-image (a prévia do link no WhatsApp mostra título e imagem): conferir como o link aparece ao colar.
- [ ] Marca provisória aceita pelo João até o rebranding (`marca.md`).
- [ ] Build do Pages verde na `master`.

## Sequência (3 ondas, cada uma só depois de a anterior ter dado sinal)
| Quando | Onda | Ação | Dono |
|---|---|---|---|
| Sáb 07/11 | 1. Grupo principal | Colar o aviso da seção 5 de `mensagens-fixadas.md`, de preferência junto de um dos 3 posts (o de currículo tem apelo imediato). Fixar a mensagem. | João (ou Claude com OK explícito) |
| Seg 09/11 | 1b. Grupo de avisos | Mesma mensagem, curta. | João |
| Seg a sex | 2. Rotina | Cada novo post semanal vira uma mensagem de uma linha no grupo com o link (Qua: "Sem medo de perguntar"; Sex: vagas), seguindo o calendário da seção 3. | João; rascunho do Claude |
| Semana 2 | 3. YouTube | Link do site na descrição do canal e na descrição dos vídeos novos; comentário fixado no vídeo mais recente. | João |
| Semana 2 | 3b. LinkedIn | Um post do João contando o que a comunidade ensina e o link do site (texto a redigir quando ele escolher o ângulo). | João; rascunho do Claude |

Por que sábado e não antes: a pesquisa (04/11) ainda está colhendo respostas; mandar o site no mesmo dia dilui os dois avisos. Esperar movimento no grupo também evita tratar como spam.

## Mensagem de cada canal
- **WhatsApp:** seção 5 de `mensagens-fixadas.md`, sem alterar. Variar a abertura a cada repetição (nunca o mesmo texto duas vezes).
- **YouTube (descrição):** uma linha: "Textos para quem está começando em tecnologia e a comunidade no WhatsApp: https://agenciagift.github.io".
- **LinkedIn:** a definir com o João; ideia: um caso de pergunta básica respondida no site ("o que é uma API?") como gancho, com o link.

## Medição e ajuste (em 22/11, junto da decisão do sprint)
Registrar uma linha em `acompanhamento-comunidade.md`: reações e perguntas depois de cada onda, respostas da caixa de perguntas, entradas novas no grupo. Se não houver sinal depois das ondas 1 e 2, perguntar na enquete de segunda como as pessoas chegam ao site, em vez de aumentar o volume.

## Decisões do João
1. Quer que o Claude poste a onda 1 no grupo (com OK explícito) ou prefere postar e fixar?
2. Instalar alguma métrica de visitas no site?
3. O post de LinkedIn: qual ângulo?
