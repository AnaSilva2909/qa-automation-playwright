# 🎭 QA Automation | Playwright

**Automação de testes web com Playwright e JavaScript**

Projeto de estudos práticos em Quality Assurance (QA), com foco em automação de testes, boas práticas de desenvolvimento, validação de funcionalidades e melhoria contínua.

## 🎯 Objetivos

- Automatizar testes funcionais e de regressão.
- Validar regras de negócio e fluxos críticos.
- Aplicar boas práticas de organização e reutilização de código.
- Investigar falhas e documentar evidências.
- Evoluir o projeto com ferramentas de automação e integração contínua.

## 🛠️ Tecnologias e ferramentas

| Tecnologia | O que é | Para que serve |
|---|---|---|
| **Playwright** | Framework de automação de testes. | Interagir com aplicações web e validar comportamentos esperados. |
| **JavaScript** | Linguagem de programação. | Desenvolver os cenários e as validações dos testes. |
| **Node.js** | Ambiente de execução JavaScript. | Executar código JavaScript fora do navegador. |
| **NPM** | Gerenciador de pacotes do Node.js. | Gerenciar dependências e executar scripts do projeto. |
| **Git** | Sistema de controle de versão. | Registrar alterações e manter o histórico do código. |
| **GitHub** | Plataforma de hospedagem de repositórios Git. | Armazenar e compartilhar o projeto. |
| **GitHub Actions** | Serviço de automação do GitHub. | Executar testes automaticamente em pipelines de integração contínua (CI). |

### 🔄 Como as tecnologias trabalham juntas?

1. **JavaScript:** utilizado para escrever os testes.
2. **Node.js:** permite executar o código JavaScript.
3. **NPM:** gerencia as dependências e os comandos do projeto.
4. **Playwright:** automatiza as interações e validações no navegador.
5. **Git:** registra as alterações realizadas.
6. **GitHub:** armazena o repositório remoto.
7. **GitHub Actions:** poderá executar os testes automaticamente.

---

## 💻 Instalação e configuração

Instruções para configurar o ambiente no Windows utilizando o Visual Studio Code (VS Code).

### 1. Instalar Node.js e NPM

O Node.js permite executar o projeto JavaScript. O NPM é instalado junto com ele e gerencia os pacotes utilizados.

1. Acesse [nodejs.org](https://nodejs.org/).
2. Baixe a versão **LTS (Long Term Support)**.
3. Execute o instalador com as opções padrão.
4. Reinicie o VS Code após a instalação, se necessário.

**Validar a instalação**

No VS Code, abra **Terminal → New Terminal** e execute:

```bash
node -v
npm -v
```

Os comandos devem exibir as versões instaladas.

### 2. Inicializar o projeto NPM

Na pasta do projeto, execute:

```bash
npm init -y
```

**O que esse comando faz?**

- `npm init`: inicializa um projeto gerenciado pelo NPM.
- `-y`: aceita as configurações padrão sem fazer perguntas.
- `package.json`: arquivo criado para registrar informações do projeto, dependências e scripts.

O comando `npm init -y` **não instala o Playwright**. Ele prepara a estrutura básica para gerenciar o projeto.

> Se o projeto já tiver um `package.json`, não execute esse comando novamente sem necessidade.

### 3. Instalar o Playwright

Para instalar o Playwright Test manualmente, execute:

```bash
npm install -D @playwright/test
```

- `npm install`: instala um pacote.
- `-D`: registra o pacote como dependência de desenvolvimento.
- `@playwright/test`: disponibiliza o framework de testes do Playwright.

**Instalar os navegadores:**

```bash
npx playwright install
```

Esse comando baixa os navegadores necessários para executar os testes.

**Alternativa:** para iniciar um projeto novo com a configuração guiada do Playwright, utilize:

```bash
npm init playwright@latest
```

Esse assistente configura o projeto e pode criar os arquivos iniciais, os testes de exemplo e a configuração do Playwright. Utilize apenas um método de inicialização para o mesmo projeto.

### 4. Executar os testes

**Executar os testes automatizados:**

```bash
npx playwright test
```

**Abrir a interface interativa:**

```bash
npx playwright test --ui
```

**Abrir o relatório HTML:**

```bash
npx playwright show-report
```

O relatório estará disponível se tiver sido gerado pela execução dos testes.

### 5. Versionar o projeto no GitHub

1. Salve os arquivos no VS Code.
2. Abra **Controle do Código-Fonte**.
3. Prepare os arquivos que deseja incluir no commit.
4. Escreva uma mensagem descritiva, por exemplo: `Adiciona testes iniciais com Playwright`.
5. Clique em **Commit**.
6. Use **Sync Changes** ou **Push** para enviar as alterações ao GitHub.

**Segurança:** não publique senhas, tokens, arquivos `.env` ou informações confidenciais.

---

## 🧪 Estratégia de testes

O projeto será desenvolvido progressivamente, contemplando:

- Testes funcionais e de regressão.
- Cenários positivos e negativos.
- Validação de elementos, mensagens e resultados esperados.
- Organização e reutilização de código.
- Análise de falhas e evidências de execução.

## 📂 Estrutura do projeto

A estrutura abaixo é ilustrativa e será ajustada conforme a evolução do projeto.

```text
qa-automation-playwright/
├── tests/                 # Cenários automatizados
├── playwright.config.js   # Configurações do Playwright
├── package.json           # Dependências e scripts
├── .gitignore             # Arquivos ignorados pelo Git
└── README.md              # Documentação do projeto
```

## 📈 Evolução do projeto

- [x] Criação do repositório no GitHub.
- [x] Documentação inicial do projeto.
- [ ] Configuração do ambiente Playwright.
- [ ] Implementação dos primeiros cenários.
- [ ] Aplicação do padrão Page Object Model.
- [ ] Configuração de relatórios e evidências.
- [ ] Integração contínua com GitHub Actions.

## 👩‍💻 Sobre o projeto

Este repositório faz parte da minha evolução profissional em Quality Assurance, com foco em automação de testes, qualidade de software e melhoria contínua.

**Status:** projeto de estudos em desenvolvimento contínuo. 🚀