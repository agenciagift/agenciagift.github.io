# Agência Gift (site) — instruções para sessões de IA

Site estático **Jekyll** publicado no GitHub Pages (domínio agenciagift.github.io).

## Comandos
- `bundle install` — instala as gems (Gemfile usa `github-pages`, mesma versão do GitHub Pages)
- `bundle exec jekyll serve` — preview local (http://127.0.0.1:4000)
- `bundle exec jekyll build` — deve terminar sem erro antes de qualquer commit
- `_site/` é artefato de build (não rastreado): **nunca editar nem commitar**.

## Estrutura
- `_config.yml` — título, URL e plugins (mudar exige reiniciar o `serve`).
- `_layouts/`, `_includes/`, `_sass/` — tema; `index.html` e demais páginas na raiz.
- Páginas `email_enviado`, `email_com_erro` e `email_incompleto` (quando existem) fazem parte do fluxo do formulário de contato: confirme o fluxo antes de mexer.
- Comunidade de desenvolvedores; foco atual em renda emergencial (estratégia em `~/.claude/plans/detalhes/gift.md`; produção de conteúdo em `docs/plano-producao-conteudo.md`). Discord foi removido do site.

## Site (template Histeregue Podcast)
Desde 2026-11-04 o site usa o template do Histeregue Podcast (`histeregue.github.io`): slider de conteúdos, categorias, RSS. Posts em `_posts/` (modelo e fluxo em `docs/plano-producao-conteudo.md`); prévia local: `bundle exec jekyll serve`. Identidade visual provisória: depende do rebranding (`~/.claude/plans/detalhes/marca.md`).

## Regras
1. **Commit e push direto na branch padrão, sem pedir OK** (autorizado pelo João; vale a regra global em `~/.claude/CLAUDE.md`). Se o build do Pages falhar ou houver regressão, corrija ou reverta na hora.
2. **Nunca inventar fato** (serviços, preços, endereços, números, depoimentos): o conteúdo vem do cliente; se faltar dado, pergunte.
3. **Sem dado sensível no repositório:** senhas, chaves, CPF/RG, dados pessoais de clientes ou usuários, mentorados e membros. Repositório público: dado de mentoria fica no projeto `mentoria` (privado). Trava: `scripts/pre-commit` (instalar com `cp scripts/pre-commit .git/hooks/pre-commit`). Só sessões do gift publicam no WhatsApp; fronteira e passagem de tarefas em `~/.claude/plans/README.md`.
4. Mudança mínima e reversível; confirmar antes de apagar páginas, mudar `CNAME` ou domínio.
