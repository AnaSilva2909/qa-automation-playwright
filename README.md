# 🎭 QA Automation | Playwright

**Automação de testes web com Playwright e JavaScript**

Projeto de estudos práticos em Quality Assurance (QA), com foco em automação de testes, boas práticas de desenvolvimento, validação de funcionalidades e melhoria contínua.

Este README funciona como um **guia de consulta**, com conceitos, comandos e procedimentos utilizados durante o desenvolvimento do projeto.

## 📑 Índice

- [Tecnologias](#-tecnologias-e-ferramentas)
- [Instalação e configuração](#-instalação-e-configuração)
- [Executar scripts com Node.js](#-executar-scripts-com-nodejs)
- [Executar testes com Playwright Test](#-executar-testes-com-playwright-test)
- [Comandos úteis do Playwright](#-comandos-úteis-do-playwright)
- [Entendendo o código](#-entendendo-o-código)
- [Git e GitHub](#-git-e-github)
- [Estratégia de testes](#-estratégia-de-testes)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Evolução do projeto](#-evolução-do-projeto)

---

## 🛠️ Tecnologias e ferramentas

| Tecnologia | O que é | Para que serve |
|---|---|---|
| **JavaScript** | Linguagem de programação | Escrever os scripts e cenários de teste. |
| **Node.js** | Ambiente de execução JavaScript | Executar código JavaScript fora do navegador. |
| **NPM** | Gerenciador de pacotes | Instalar dependências e gerenciar scripts do projeto. |
| **Playwright** | Biblioteca de automação | Controlar navegadores e interagir com aplicações web. |
| **Playwright Test** | Executor de testes | Organizar, executar e validar testes automatizados. |
| **Git** | Controle de versão | Registrar alterações no código. |
| **GitHub** | Plataforma de hospedagem Git | Armazenar e compartilhar o repositório. |
| **GitHub Actions** | Automação de workflows | Executar testes automaticamente em pipelines de CI. |

### 🔄 Como as tecnologias trabalham juntas?

1. Escrevo o código em JavaScript.
2. O Node.js executa o código.
3. O Playwright controla o navegador.
4. O Playwright Test organiza e executa os cenários estruturados.
5. O Git registra as alterações.
6. O GitHub armazena o projeto remotamente.
7. O GitHub Actions poderá executar os testes automaticamente.

---

## 💻 Instalação e configuração

Instruções para configurar o ambiente no Windows utilizando o Visual Studio Code (VS Code).

### 1. Instalar Node.js e NPM

1. Acesse https://nodejs.org/.
2. Baixe a versão **LTS (Long Term Support)**.
3. Execute o instalador com as opções padrão.
4. Reinicie o VS Code, se necessário.

**Validar a instalação**

Abra o terminal do VS Code e execute:

```bash
node -v
npm -v
```

Os comandos devem exibir as versões instaladas.

### 2. Abrir o terminal na pasta do projeto

No VS Code:

1. Abra a pasta principal do projeto.
2. Acesse **Terminal → New Terminal**.
3. Confira o caminho exibido no terminal.

O terminal deve estar na pasta que contém o `package.json`.

No PowerShell, você pode conferir a pasta atual com:

```powershell
Get-Location
```

Para listar os arquivos e pastas:

```powershell
Get-ChildItem
```

### 3. Inicializar o projeto NPM

Se o projeto ainda não tiver `package.json`, execute:

```bash
npm init -y
```

- `npm init`: inicializa um projeto gerenciado pelo NPM.
- `-y`: aceita as configurações padrão.
- `package.json`: registra informações, dependências e scripts do projeto.

**Importante:** esse comando não instala o Playwright. Se o `package.json` já existir, não é necessário executar novamente.

### 4. Instalar o Playwright Test

Para instalar o executor de testes:

```bash
npm install -D @playwright/test
```

- `npm install`: instala um pacote.
- `-D`: registra o pacote como dependência de desenvolvimento.
- `@playwright/test`: disponibiliza o executor de testes e as funcionalidades de `test()` e `expect()`.

Instale os navegadores:

```bash
npx playwright install
```

Esse comando baixa os navegadores necessários para executar os testes.

**Alternativa para projetos novos:** o assistente abaixo configura um projeto Playwright:

```bash
npm init playwright@latest
```

Ele pode criar arquivos de configuração, testes de exemplo e outras estruturas iniciais. Em um projeto existente, confira os arquivos antes de executar para evitar configurações duplicadas.

---

## ▶️ Executar scripts com Node.js

Utilize essa forma quando o arquivo contém um script JavaScript executado diretamente, por exemplo, uma função assíncrona que abre o navegador, acessa um site e captura uma tela.

### Executar um arquivo na pasta principal

Se o arquivo se chamar `basicTest.js` e estiver na raiz do projeto:

```powershell
node .\basicTest.js
```

### Executar um arquivo dentro da pasta `tests`

Se o arquivo estiver em `tests` e se chamar `basicTest.js`:

```powershell
node .\tests\basicTest.js
```

Se o arquivo se chamar `teste.js`:

```powershell
node .\tests\teste.js
```

**Atenção:** substitua o nome pelo nome real do arquivo. O caminho precisa corresponder à localização do script.

### Listar os arquivos JavaScript existentes

Se aparecer `MODULE_NOT_FOUND`, confira se o arquivo existe:

```powershell
Get-ChildItem -Recurse -Filter *.js
```

Esse comando lista arquivos `.js` na pasta atual e nas subpastas.

### Como reconhecer um script simples?

Exemplo:

```javascript
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://example.com');
    await page.screenshot({ path: 'pagina.png' });

    await browser.close();
})();
```

Esse script:

1. Importa o Chromium.
2. Abre o navegador.
3. Cria uma página.
4. Acessa o endereço informado.
5. Salva uma captura de tela.
6. Fecha o navegador.

**Quando usar `node`:** quando quero executar diretamente um arquivo JavaScript, sem utilizar a estrutura de execução do Playwright Test.

---

## 🧪 Executar testes com Playwright Test

Utilize esses comandos quando os cenários estiverem organizados para o Playwright Test, normalmente usando `test()` e `expect()`.

### Executar todos os testes encontrados

```bash
npx playwright test
```

O Playwright Test procura os arquivos de teste conforme a configuração do projeto. Por padrão, reconhece nomes como `example.spec.js` e `example.test.js`.

### Executar um arquivo específico

Se o arquivo estiver em `tests`:

```bash
npx playwright test tests/basicTest.spec.js
```

Substitua o caminho pelo nome real do arquivo.

### Executar uma suíte ou grupo de testes

Se todos os testes estiverem na pasta `tests`:

```bash
npx playwright test tests/
```

Esse comando executa os testes reconhecidos dentro da pasta indicada, incluindo subpastas.

Para executar somente os testes que correspondem a uma parte do nome:

```bash
npx playwright test -g "login"
```

O comando seleciona testes cujo título corresponde ao padrão informado. Ele não cria uma suíte; apenas filtra os testes existentes.

### Executar mostrando o navegador

```bash
npx playwright test --headed
```

Abre o navegador durante a execução dos testes.

### Executar em modo de interface

```bash
npx playwright test --ui
```

Abre uma interface interativa para acompanhar e depurar os testes.

### Executar novamente apenas os testes que falharam

```bash
npx playwright test --last-failed
```

Esse comando usa o registro da execução anterior para selecionar os testes que falharam.

### Diferença entre `node` e `npx playwright test`

| Situação | Comando |
|---|---|
| Executar um script JavaScript simples | `node .\tests\basicTest.js` |
| Executar todos os testes estruturados | `npx playwright test` |
| Executar um teste estruturado específico | `npx playwright test tests/basicTest.spec.js` |
| Executar os testes de uma pasta | `npx playwright test tests/` |
| Executar testes mostrando o navegador | `npx playwright test --headed` |
| Abrir a interface interativa | `npx playwright test --ui` |

**Importante:** o nome do arquivo, sozinho, não define como ele deve ser executado. Um arquivo chamado `basicTest.js` pode ser um script simples ou um teste estruturado. A estrutura do código é que determina a forma correta de execução.

---

## 🧰 Comandos úteis do Playwright

### Abrir o relatório HTML

```bash
npx playwright show-report
```

Abre o relatório da execução anterior, desde que ele tenha sido gerado. Em uma configuração padrão, o relatório HTML é gerado quando a configuração do projeto o habilita.

### Gerar relatório HTML em uma execução

```bash
npx playwright test --reporter=html
```

Executa os testes usando o relatório HTML. Depois, abra-o com:

```bash
npx playwright show-report
```

### Executar um teste várias vezes?

Para executar uma suíte três vezes, por exemplo:

```bash
npx playwright test --repeat-each=3
```

Esse recurso ajuda a investigar falhas intermitentes.

### Ver opções disponíveis

```bash
npx playwright test --help
```

Mostra as opções disponíveis para execução de testes.

---

## 📚 Entendendo o código

### 1. Importar o Playwright

```javascript
const { chromium } = require('playwright');
```

- `const`: declara uma variável que não pode ser reatribuída.
- `{ chromium }`: seleciona a propriedade `chromium` do objeto importado.
- `require('playwright')`: carrega a biblioteca Playwright.
- `chromium`: permite iniciar o navegador Chromium.

Essa linha importa a ferramenta, mas ainda não abre o navegador.

### 2. Abrir o navegador

```javascript
const browser = await chromium.launch({ headless: false });
```

- `chromium.launch()`: inicia o navegador.
- `headless: false`: mostra a janela do navegador.
- `await`: aguarda a operação assíncrona terminar.
- `browser`: guarda a referência ao navegador aberto.

### 3. Criar uma página

```javascript
const page = await browser.newPage();
```

Cria uma página para navegar e interagir com o site. Essa forma simplificada gerencia um contexto para a página.

### 4. Acessar um endereço

```javascript
await page.goto('https://example.com');
```

Navega até o endereço informado. A navegação não significa, por si só, que o conteúdo foi validado.

### 5. Capturar a tela

```javascript
await page.screenshot({ path: 'pagina.png' });
```

Salva uma captura da página atual no caminho informado.

### 6. Fechar o navegador

```javascript
await browser.close();
```

Fecha o navegador e libera os recursos associados.

### 7. Entender `async` e `await`

- `async`: permite utilizar `await` dentro de uma função assíncrona.
- `await`: espera uma operação assíncrona terminar antes de continuar naquela função.

São utilizados porque operações como abrir o navegador e navegar até um endereço levam tempo.

### 8. Criar um teste estruturado

```javascript
const { test, expect } = require('@playwright/test');

test('deve exibir o título da página', async ({ page }) => {
    await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example Domain/);
});
```

- `test()`: define um cenário automatizado.
- `page`: página fornecida pelo Playwright Test.
- `expect()`: inicia uma validação.
- `toHaveTitle()`: verifica se o título corresponde ao padrão esperado.

Esse exemplo é um teste estruturado. Para executá-lo, use `npx playwright test`, e não `node` diretamente como no script simples.

---

## 🔄 Git e GitHub

O Git registra as alterações localmente. O GitHub armazena uma cópia remota do repositório.

### 1. Conferir as alterações

No terminal:

```bash
git status
```

Mostra os arquivos modificados, novos ou preparados para commit.

### 2. Adicionar arquivos ao commit

Para adicionar todos os arquivos alterados que não estejam ignorados pelo Git:

```bash
git add .
```

Para adicionar somente um arquivo:

```bash
git add README.md
```

### 3. Criar um commit

```bash
git commit -m "Documenta comandos do Playwright"
```

O commit registra um conjunto de alterações no histórico local.

A mensagem deve resumir o que foi alterado.

### 4. Enviar as alterações ao GitHub

```bash
git push
```

Envia os commits locais para o repositório remoto, desde que a branch e o remoto estejam configurados corretamente.

### 5. Atualizar o GitHub pelo VS Code

Também é possível fazer tudo pela interface:

1. Salve os arquivos.
2. Abra **Controle do Código-Fonte** (`Ctrl + Shift + G`).
3. Confira a lista de arquivos alterados.
4. Clique no `+` para preparar os arquivos que deseja incluir.
5. Digite uma mensagem de commit.
6. Clique em **Commit**.
7. Clique em **Sync Changes** ou use **Push** para enviar as alterações.

O nome e a posição dos botões podem variar conforme a versão do VS Code.

### 6. Diferença entre Commit, Push e Sync Changes

| Ação | O que faz |
|---|---|
| **Stage** | Seleciona as alterações que entrarão no próximo commit. |
| **Commit** | Salva as alterações no histórico local do Git. |
| **Push** | Envia os commits locais ao GitHub. |
| **Pull** | Busca e integra alterações do repositório remoto. |
| **Sync Changes** | Sincroniza a branch local com a remota, podendo envolver envio e recebimento de alterações. |

**Fluxo habitual para atualizar o GitHub:**

```text
Salvar arquivos
      ↓
git status
      ↓
git add .
      ↓
git commit -m "Descrição das alterações"
      ↓
git push
```

**Se aparecer erro de identidade do Git**, configure seu nome e e-mail:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"
```

Substitua pelos dados que deseja utilizar nos commits. Essas configurações são globais para seus repositórios; sem `--global`, valem apenas para o repositório atual.

**Segurança:** nunca publique senhas, tokens de acesso, arquivos `.env`, credenciais ou código confidencial do trabalho.

---

## 🧪 Estratégia de testes

O projeto será desenvolvido progressivamente, contemplando:

- Testes funcionais e de regressão.
- Cenários positivos e negativos.
- Validação de elementos, mensagens e resultados esperados.
- Organização e reutilização de código.
- Análise de falhas e evidências de execução.
- Relatórios de execução e integração contínua.

## 📂 Estrutura do projeto

Exemplo de organização:

```text
qa-automation-playwright/
├── tests/                   # Testes automatizados estruturados
├── scripts/                 # Scripts JavaScript executados diretamente
├── playwright.config.js     # Configuração do Playwright Test
├── package.json             # Dependências e scripts
├── package-lock.json        # Versões das dependências instaladas
├── .gitignore               # Arquivos ignorados pelo Git
└── README.md                # Documentação do projeto
```

Essa estrutura é uma sugestão. Se você ainda não tiver a pasta `scripts`, não precisa criá-la imediatamente. O importante é utilizar os caminhos reais dos arquivos nos comandos.

## 📈 Evolução do projeto

- [x] Criação do repositório no GitHub.
- [x] Documentação inicial do projeto.
- [x] Configuração inicial do ambiente.
- [ ] Implementação dos primeiros cenários estruturados.
- [ ] Aplicação do padrão Page Object Model.
- [ ] Configuração de relatórios e evidências.
- [ ] Integração contínua com GitHub Actions.

## 👩‍💻 Sobre o projeto

Este repositório faz parte da minha evolução profissional em Quality Assurance, com foco em automação de testes, qualidade de software e melhoria contínua.

**Status:** projeto de estudos em desenvolvimento contínuo. 🚀
