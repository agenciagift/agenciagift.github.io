# Ambiente do GitHub Pages e gems do Jekyll (referência)

Este arquivo reúne **o que o GitHub Pages (GHP) permite e como o ambiente se comporta**, para decidir o que dá para fazer neste site sem plugin próprio. Não é publicado (`docs/` está em `exclude` no `_config.yml`).

**Como foi levantado:** versões, lista de plugins e configuração efetiva saem do próprio gem `github-pages` (versão **232**) instalado neste repositório (`bundle exec github-pages versions`, `GitHubPages::Plugins`, `GitHubPages::Configuration.effective_config`), e as opções de cada plugin dos READMEs dos gems instalados. Itens marcados **(doc GitHub)** vêm da documentação do GitHub e devem ser reconferidos de vez em quando, porque limites mudam.

## 1. Como o GHP constrói o site
- **Roda `jekyll build` em modo seguro** (`safe: true`, não dá para desligar). Consequências:
  - **plugins próprios não funcionam**: nada em `_plugins/`, nada de gem fora da lista abaixo;
  - o `Gemfile` serve só para o preview local: **plugin precisa estar em `plugins:` do `_config.yml`**, senão não roda no GHP (e `jekyll-sitemap` e `jekyll-seo-tag` avisam isso nos READMEs);
  - links simbólicos não são seguidos e não dá para incluir arquivo de fora da pasta do site.
- **Versões fixas pelo GitHub:** Jekyll **3.10.0**, Liquid **4.0.4**, kramdown **2.4.0** (GFM, via `kramdown-parser-gfm` 1.1.0), Rouge **3.30.0**, `jekyll-sass-converter` **1.5.2** (Ruby Sass 3.7: aceita `.sass` e `.scss`, **não** tem `@use` nem recursos do Dart Sass), commonmark-ghpages 0.5.1. Para subir de versão é preciso esperar o GitHub atualizar o gem `github-pages`.
- **Ambiente:** o build roda com `JEKYLL_ENV=production` **(doc GitHub)**. Localmente `jekyll serve` usa `development`: por isso as URLs absolutas do `jekyll-seo-tag`, do sitemap e do feed saem com `localhost:4000` no preview e com `https://agenciagift.github.io` no ar. Para ver igual ao ar: `JEKYLL_ENV=production bundle exec jekyll build -d /tmp/saida`.
- **Gatilho:** cada push na branch de publicação dispara o workflow "pages build and deployment" (aba Actions). Se o build falhar, o site antigo continua no ar e o GitHub avisa por e-mail. A origem da publicação (branch e pasta) fica em Settings → Pages: **conferir lá** que é a raiz da branch padrão, porque `docs/` aqui é só documentação.
- **Publicação não é instantânea:** o CDN costuma levar alguns minutos para refletir mudanças. Prévias de link (WhatsApp, Facebook) têm cache próprio e podem mostrar a versão antiga por horas.
- **Limites (doc GitHub):** site publicado de até 1 GB; repositório recomendado até 1 GB; deploy com timeout de 10 minutos; limites "suaves" de 100 GB de banda por mês e 10 builds por hora (não valem para publicação por GitHub Actions personalizada). Repositório público no plano gratuito.
- **`_site/` não vai para o git** (o GHP gera). Arquivos/pastas que começam com `_` ou `.` não são publicados, exceto o que o Jekyll processa (`_posts`, coleções com `output: true`). Para publicar uma pasta com `_`, usar `include:`.
- **Um arquivo `.nojekyll` desliga o Jekyll** (publica o repositório como está); não usar aqui.
- **Caixa das letras:** o servidor diferencia maiúsculas de minúsculas, o macOS local não. Um link `/Media/foto.jpg` funciona no preview e quebra no ar.
- **`404.html` na raiz** vira a página de erro. HTTPS é obrigatório em `github.io` (domínio próprio pede CNAME e DNS; **não mexer** em `CNAME` sem confirmar, ver `CLAUDE.md`).
- **Sem back-end:** nada de formulário que grave, banco ou cookie de servidor. O formulário de contato depende de serviço externo.

## 2. Configuração efetiva neste site
Mescla da configuração do Jekyll, dos padrões do `github-pages` e do `_config.yml` daqui:
- **Imposto pelo GitHub (não dá para mudar):** `safe: true`, `lsi: false`, `highlighter: rouge`, `kramdown.math_engine: mathjax`, `kramdown.syntax_highlighter: rouge`, `gist.noscript: false`, whitelist de plugins (seção 3).
- **Padrão que o `_config.yml` pode mudar:** `markdown: kramdown` com `input: GFM`, `hard_wrap: false`, `gfm_quirks: paragraph_end`, `syntax_highlighter_opts.default_lang: plaintext`; `exclude: [CNAME]`.
- **`future`: fica `false`** (padrão do Jekyll prevalece na mesclagem aqui): **post com data no futuro não aparece**, mas o GHP só reconstrói quando há push; para "agendar" um post é preciso um push (ou um workflow agendado) depois da data. Para publicar na hora, use a data de hoje.
- **`theme`:** o `github-pages` declara `jekyll-theme-primer` como padrão, mas as **`_layouts/` do próprio site têm prioridade**; se um dia faltar um layout, o do Primer aparece no lugar. Este site não define `theme:`.
- **Plugins efetivos aqui:** os do `_config.yml` (`jekyll-coffeescript`, `jekyll-paginate`, `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`) **mais** os padrões do GHP (união das listas): `commonmark-ghpages`, `gist`, `github-metadata`, `relative-links`, `optional-front-matter`, `readme-index`, `default-layout`, `titles-from-headings`. (`jekyll-coffeescript` já é padrão; a linha no config é redundante.)

## 3. Plugins permitidos (whitelist do `github-pages` 232)
Só estes 20 rodam. **Padrão** = ativo sem declarar; **declarar** = precisa estar em `plugins:`.

| Plugin | Versão | Ativação | O que faz e como usar |
|---|---|---|---|
| **jekyll-seo-tag** | 2.8.0 | declarar (**em uso**) | `{% seo %}` no `<head>`: `<title>`, `description`, `canonical`, Open Graph, Twitter Card e JSON-LD. Lê do `_config.yml`: `title`, `tagline`, `description`, `url`, `author`, `twitter.username/card`, `facebook.*`, `logo`, `social.name/links`, `locale` (ou `lang`), `webmaster_verifications` / `google_site_verification`. Lê do front matter: `title`, `description`, `image` (caminho ou `image.path`), `author`, `locale`, `seo.name/type/links`. `{% seo title=false %}` não emite `<title>`. **Aqui:** `image` por post vira o `og:image` (padrão em `_config.yml`: `/media/fundo-padrao.jpg`). |
| **jekyll-sitemap** | 1.4.0 | declarar (**em uso**) | gera `/sitemap.xml`. `sitemap: false` no front matter (ou em `defaults:` por caminho) exclui. `<lastmod>`: `last_modified_at` do front matter, senão a data do post. `jekyll-last-modified-at` **não** é permitido. Também entra em `site.pages`, cuidado com menus que listam todas as páginas. |
| **jekyll-feed** | 0.17.0 | declarar (**em uso**) | gera `/feed.xml` em **Atom** (não RSS 2.0). `{% feed_meta %}` no `<head>` anuncia o feed. Opções em `feed:`: `posts_limit` (padrão 10; aqui 20), `path`, `categories:` (um feed por categoria, em `/feed/<cat>.xml`), `tags: true` (`/feed/by_tag/<tag>.xml`), `collections:`, `excerpt_only`, `disable_in_development`. Front matter por post: `image`, `author`, `description`, `excerpt_only`. Estilo opcional: arquivo `feed.xslt.xml` na raiz. Usa `smartify` nos títulos. |
| **jekyll-redirect-from** | 0.16.0 | declarar | `redirect_from: [/antigo/]` no front matter gera páginas HTML com `meta refresh` (não há 301 de verdade no GHP); `redirect_to: url` leva para outro site. Útil para mudar permalinks ou migrar de domínio sem quebrar links. |
| **jekyll-paginate** | 1.1.0 | padrão | paginação clássica (v1): `paginate:` e `paginate_path:` e um `index.html` na **raiz** usando `paginator`. Só pagina os posts do índice, não categorias. **Aqui está configurado mas não é usado** (a home é um slider de 5 posts). |
| **jekyll-include-cache** | 0.2.1 | declarar | `{% include_cached arquivo.html %}` guarda o resultado de um include entre páginas (acelera build de sites grandes). Não precisa aqui. |
| **jekyll-relative-links** | 0.6.1 | padrão | converte links relativos de `.md` (`[x](outro.md)`) em URLs do site. Opções: `relative_links.enabled`, `collections`. |
| **jekyll-titles-from-headings** | 0.5.3 | padrão | se a página não tem `title`, usa o primeiro `#`/`##`/`###`. Opções em `titles_from_headings:` (`enabled`, `strip_title`, `collections`). |
| **jekyll-optional-front-matter** | 0.3.2 | padrão | processa arquivos `.md` sem front matter, como páginas. Opção `optional_front_matter.remove_originals`. |
| **jekyll-readme-index** | 0.3.0 | padrão | usa o `README.md` como `index` de uma pasta sem índice (`readme_index.enabled`, `remove_originals`). |
| **jekyll-default-layout** | 0.1.5 | padrão | aplica um layout padrão (`page`, `post`, `default` conforme o tipo) a páginas sem `layout`. |
| **jekyll-github-metadata** | 2.16.1 | padrão | `site.github.*` (nome do repositório, URL, contribuidores, etc.) vindo da API do GitHub. No GHP funciona sozinho; **localmente** pode avisar de falta de token (`JEKYLL_GITHUB_TOKEN`) ou de repositório; não é essencial. |
| **jekyll-commonmark-ghpages** | 0.5.1 | padrão (conversor opcional) | conversor Markdown alternativo (cmark-gfm). Ativa com `markdown: CommonMarkGhPages`; opções em `commonmark.options` (`UNSAFE` é necessário para HTML cru, `SMART`, `FOOTNOTES`) e `commonmark.extensions` (`strikethrough`, `autolink`, `table`, `tagfilter`). **Aqui usa kramdown.** |
| **jekyll-gist** | 1.5.0 | padrão | `{% gist usuario/id %}` (e `arquivo.js`) incorpora um Gist. |
| **jekyll-coffeescript** | 1.2.2 | padrão | compila `.coffee` para JS. Sem uso aqui. |
| **jekyll-mentions** | 1.6.0 | declarar | transforma `@usuario` em link para o perfil do GitHub; `jekyll-mentions.base_url` muda o destino. Cuidado: vira link em todo `@`. |
| **jemoji** | 0.13.0 | declarar | `:smile:` vira imagem de emoji do GitHub. |
| **jekyll-avatar** | 0.8.0 | declarar | `{% avatar usuario size=50 %}` mostra o avatar do GitHub (aceita variável no lugar do nome). |
| **jekyll-remote-theme** | 0.4.3 | declarar | `remote_theme: dono/repositorio` usa um tema de qualquer repositório do GitHub (também aceita `@tag`). |
| **jekyll-octicons** | (não instalado) | declarar | consta na whitelist, **mas a gem não vem no bundle 232**: não contar com ele. |

Temas embutidos do GHP (via `theme:`/`remote_theme`): Primer (padrão do gem), Architect, Cayman, Dinky, Hacker, Leap day, Merlot, Midnight, Minimal, Modernist, Slate, Tactile, Time machine, além dos gems `minima` 2.5.1 e `jekyll-swiss` 1.0.0.

## 4. Filtros e recursos do Jekyll 3.10 / Liquid 4 úteis aqui
- URLs: `relative_url`, `absolute_url` (usa `url` e `baseurl`), `url_encode`, `uri_escape`, `slugify`.
- Listas: `where`, `where_exp`, `group_by`, `group_by_exp`, `sort`, `map`, `uniq`, `size`, `first`, `last`; **não existe filtro `limit`** (use `{% for x in lista limit: 3 %}`).
- Datas: `date`, `date_to_xmlschema`, `date_to_rfc822`, `date_to_string`; fuso do site em `timezone`.
- Texto: `markdownify`, `smartify`, `strip_html`, `strip_newlines`, `truncatewords`, `jsonify`, `xml_escape`, `number_of_words`.
- Includes aceitam parâmetros (`include.nome`) e variáveis (`{% include {{ include.icone }} %}`). Para mostrar `{% ... %}` literal em texto, usar `{% raw %}`.
- Markdown dentro de bloco HTML só é processado com `markdown="1"` no elemento.
- `defaults:` no `_config.yml` aplica front matter por caminho/tipo (usado para `layout`, `image` e `permalink`). Regra: o escopo mais específico (ou o definido depois) vence, e o front matter do próprio arquivo vence tudo.
- O Sass está em sintaxe SCSS (chaves e ponto-e-vírgula), em `css/main.scss` e `_sass/*.scss` (convertido do `.sass` indentado em 2026-11-06 com `sass-convert`; CSS gerado equivalente). Limitação do Ruby Sass (3.7): sem `@use`, só `@import`.

## 5. O que este site usa hoje (resumo operacional)
- **Ativos:** SEO (`image` e `description` por post), sitemap, feed Atom em `/feed.xml` (substitui o `feed.xml` manual antigo), paginação configurada (sem uso).
- **Capas dos posts:** `image: /media/arquivo.jpg` (e `image_alt:` descritivo) no front matter; sem `image`, vale `/media/fundo-padrao.jpg`. Comprimir com `sh scripts/otimizar-imagens.sh` (o pre-commit avisa acima de 500 KB).
- **Vídeos do canal:** `{% include youtube.html key="..." %}` com as chaves de `_data/youtube.yml` (iframe em `youtube-nocookie.com`, carregamento preguiçoso). O embed foi liberado pelo dono do canal.
- **Compartilhar e relacionados** no fim de cada post (layout `post.html`), filtro por categoria e RSS na página Conteúdos.

## 6. Ideias que a whitelist permite (não aplicadas)
- **`jekyll-redirect-from`**: se algum endereço de post mudar ou o domínio trocar (ex.: `agenciagift.com.br`), manter os links antigos funcionando.
- **`jekyll-include-cache`**: só se o build passar a demorar.
- **`feed: categories:`** para um feed por categoria, se a comunidade quiser assinar só "carreira", por exemplo.
- **`jekyll-github-metadata`** (`site.github`) para mostrar contribuidores/estrelas do repositório da comunidade.
- **Agendamento de posts:** `future: false` + um workflow do GitHub Actions com `schedule:` fazendo um commit/rebuild diário.

## 7. Como conferir tudo isso de novo
```
bundle exec github-pages versions                       # versões fixas pelo GHP
bundle exec ruby -e 'require "github-pages"; puts GitHubPages::Plugins::PLUGIN_WHITELIST'
JEKYLL_ENV=production bundle exec jekyll build -d /tmp/saida   # simula o ar
```
Se o GitHub publicar um `github-pages` novo, rodar `bundle update github-pages` e reler as seções 1 a 3.
