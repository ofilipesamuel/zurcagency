# Zurc Agency no VS Code e Netlify

## 1. Baixar o projeto

No painel do projeto, abra o checkpoint entregue e use a opção de baixar o código em ZIP. Salve o arquivo no computador e extraia-o em uma pasta, por exemplo `Documentos/zurc-agency`.

O projeto entregue está estruturado como uma aplicação React/Vite. A pasta raiz contém `package.json`, enquanto o frontend fica em `client/`.

## 2. Abrir no VS Code

Instale o [Node.js LTS](https://nodejs.org/) e o [Visual Studio Code](https://code.visualstudio.com/). Depois, no VS Code, selecione **File → Open Folder** e abra a pasta raiz `zurc-agency`, não apenas a pasta `client`.

Abra o terminal integrado em **Terminal → New Terminal** e execute:

```bash
npm install -g pnpm
pnpm install
pnpm dev
```

O terminal mostrará um endereço local. Abra-o no navegador. Para interromper o servidor, pressione `Ctrl + C`.

## 3. Verificar antes de publicar

Na raiz do projeto, rode:

```bash
pnpm check
pnpm build
```

A primeira linha verifica o TypeScript. A segunda gera a versão de produção. Se ambas terminarem sem erro, o projeto está pronto para ser versionado.

## 4. Enviar para o GitHub

Crie um repositório privado ou público no [GitHub](https://github.com/new), sem adicionar README, `.gitignore` ou licença se esses arquivos já vierem no projeto.

No terminal, dentro da pasta raiz, execute:

```bash
git init
git add .
git commit -m "Primeira versão da infraestrutura digital da Zurc"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

Substitua `SEU-USUARIO` e `NOME-DO-REPOSITORIO` pelos dados do seu repositório. Não publique chaves, tokens ou arquivos `.env`.

## 5. Criar o site no Netlify

No [Netlify](https://app.netlify.com/), faça login, clique em **Add new site → Import an existing project** e escolha GitHub. Autorize o repositório e selecione o projeto da Zurc.

Use estas configurações:

| Campo | Valor |
|---|---|
| Base directory | vazio, ou `.` |
| Build command | `pnpm build` |
| Publish directory | `dist/public` |
| Node version | 20 ou superior |
|
Se o Netlify não reconhecer pnpm automaticamente, defina a variável de ambiente `NPM_FLAGS` como `--version` ou use `npm install -g pnpm && pnpm build` como comando de build. A opção preferível é manter o projeto com pnpm e adicionar um arquivo `netlify.toml` na raiz caso necessário.

Conteúdo sugerido para `netlify.toml`:

```toml
[build]
  command = "pnpm build"
  publish = "dist/public"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

A regra de redirect é importante porque as páginas usam rotas do frontend, como `/servicos`, `/projetos` e `/contato`. Sem ela, o carregamento direto de uma subpágina pode retornar 404 no Netlify.

## 6. Atenção aos assets visuais

O projeto usa imagens com caminhos `/manus-storage/...`, que funcionam no ambiente hospedado do projeto. Em uma hospedagem externa, como o Netlify, esses caminhos podem não existir.

Depois do primeiro deploy, verifique especialmente as imagens em `/projetos`. Se alguma aparecer quebrada, baixe os assets originais, coloque cópias pequenas em `client/public/assets/` e altere os caminhos em `client/src/data/projects.ts` para, por exemplo:

```ts
image: "/assets/zurc-project-interface.png"
```

Depois faça commit e push novamente. O favicon também deve ser conferido, pois atualmente usa o símbolo visual do projeto.

## 7. Domínio próprio

No Netlify, abra **Site configuration → Domain management → Add a domain**. Você pode usar um domínio comprado fora do Netlify ou comprar um domínio pelo próprio fluxo disponível na conta. Siga os registros DNS indicados pelo painel.

## 8. Alternativa mais simples

O projeto também possui hospedagem integrada no ambiente Manus, com checkpoint e suporte a domínio personalizado. Para esse caminho, não é necessário transferir o código nem adaptar os assets para outra infraestrutura. Se escolher o Netlify, a configuração acima é a rota recomendada, mas faça a verificação dos assets após o deploy.

## Referências

1. [Node.js](https://nodejs.org/)
2. [Visual Studio Code](https://code.visualstudio.com/)
3. [GitHub](https://github.com/)
4. [Netlify — documentação de deploy](https://docs.netlify.com/welcome/add-new-site/)
5. [Netlify — redirects](https://docs.netlify.com/routing/redirects/)
