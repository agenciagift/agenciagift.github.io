---
title: "Sem medo de perguntar: o que é Git e por que usar?"
image: /media/o-que-e-git-e-por-que-usar.jpg
image_alt: "Boneco do mascote do GitHub, um gato-polvo preto, diante de um notebook"
categories: [sem-medo-de-perguntar]
---
Você já ouviu "faz um commit" ou "abre um branch" e ficou com vergonha de perguntar? É uma dúvida muito comum, e a resposta é mais simples do que parece.

## A resposta curta
**Git é um programa que guarda o histórico do seu projeto.** Cada vez que você chega a um ponto que quer lembrar, salva uma "foto" do projeto (isso se chama **commit**) e pode voltar a ela depois.

## Uma analogia
Pense em um trabalho com versões chamadas "final", "final2" e "final-agora-vai". O Git faz isso sem encher a pasta de cópias: guarda um histórico organizado, com data e uma mensagem curta dizendo o que mudou em cada versão.

## Por que usar
- **Voltar atrás** quando algo quebra, em vez de refazer tudo.
- **Testar ideias sem medo:** um **branch** (galho) é uma linha paralela do projeto, para experimentar sem mexer no que já funciona.
- **Trabalhar em equipe:** as mudanças de várias pessoas podem ser reunidas (o *merge*), e o Git avisa quando duas pessoas mexeram no mesmo trecho.

## Git não é GitHub
O **Git** roda no seu computador. O **GitHub** é um site que guarda projetos Git na internet e facilita compartilhar e colaborar. Um é a ferramenta; o outro é um lugar para guardar e mostrar o que você fez. Este vídeo do canal explica a diferença:

{% include youtube.html key="git-vs-github" %}

## Os primeiros comandos
Com o Git instalado, dentro da pasta de um projeto:

```bash
git init                      # começa a acompanhar a pasta
git status                    # mostra o que mudou
git add arquivo.txt           # escolhe o que entra na próxima "foto"
git commit -m "primeira versão"  # tira a "foto", com uma mensagem
git log                       # lista o histórico
```

## Para praticar
Crie uma pasta de teste, rode `git init`, crie um arquivo de texto, faça um commit, mude o arquivo e rode `git status` para ver o que o Git percebeu. Não precisa decorar nada: errar numa pasta de teste não custa nada.

## Quer ver passo a passo?
A playlist completa de Git do canal da Gift segue essa ordem:

{% include youtube.html key="git-playlist" %}

**Ficou alguma dúvida?** Mande a próxima pergunta básica pela caixa de perguntas ou no grupo do WhatsApp. Aqui ninguém é ridicularizado por perguntar o básico.
