# 🎭 QA Automation | Playwright

**Automação de testes web com Playwright e JavaScript**

Projeto de estudos práticos em Quality Assurance (QA), com foco na criação de testes automatizados confiáveis, organizados e de fácil manutenção.

---

## 🎯 Objetivos do projeto

- Desenvolver e manter testes automatizados para aplicações web.
- Validar funcionalidades, regras de negócio e fluxos críticos.
- Aplicar boas práticas de organização e reutilização de código.
- Investigar falhas e produzir evidências de execução.
- Evoluir o projeto gradualmente com ferramentas e práticas de QA.

## 🛠️ Tecnologias e ferramentas

Este projeto utiliza tecnologias voltadas à automação de testes web, desenvolvimento JavaScript e controle de versão. Cada ferramenta possui uma função específica no processo de criação, execução e manutenção dos testes automatizados.

| Tecnologia | O que é? | Para que serve no projeto? |
|---|---|---|
| **Playwright** | Framework de automação de testes desenvolvido pela Microsoft. | Automatizar testes em aplicações web, interagir com elementos da página, validar comportamentos e verificar resultados esperados. |
| **JavaScript** | Linguagem de programação utilizada no desenvolvimento web. | Escrever os cenários automatizados, criar funções, manipular dados e implementar as validações dos testes. |
| **Node.js** | Ambiente de execução JavaScript fora do navegador. | Permitir que os testes e as ferramentas do projeto sejam executados no computador. |
| **NPM** | Gerenciador de pacotes que acompanha a instalação padrão do Node.js. | Instalar, gerenciar e atualizar as dependências do projeto, além de executar comandos definidos no `package.json`. |
| **Git** | Sistema de controle de versão distribuído. | Registrar alterações no código, criar commits, comparar versões e facilitar a manutenção do projeto. |
| **GitHub** | Plataforma de hospedagem de repositórios Git. | Armazenar o projeto remotamente, manter seu histórico e compartilhar o portfólio. |
| **GitHub Actions** | Serviço de automação integrado ao GitHub. | Executar testes automaticamente em fluxos de integração contínua (CI), por exemplo, após um push ou na abertura de um pull request. |

### 🔄 Como as tecnologias trabalham juntas?

1. **JavaScript** é utilizado para escrever os testes.
2. **Node.js** permite executar o código JavaScript no ambiente do projeto.
3. **NPM** gerencia as dependências e os comandos necessários para executar os testes.
4. **Playwright** fornece os recursos para interagir com a aplicação web e validar seus comportamentos.
5. **Git** registra as alterações realizadas no código.
6. **GitHub** mantém o repositório remoto e o histórico do projeto.
7. **GitHub Actions** poderá executar os testes automaticamente, conforme a evolução do projeto.

---

## 💻 Instalação e configuração do ambiente

Este guia apresenta as etapas para preparar o ambiente de desenvolvimento no Windows, utilizando o Visual Studio Code.

### 1. Instalar o Node.js e o NPM

O Node.js é necessário para executar os testes, enquanto o NPM é utilizado para gerenciar as dependências do projeto.

1. Acesse o site oficial: [Node.js](https://nodejs.org/).
2. Baixe a versão **LTS (Long Term Support)**, recomendada para a maioria dos projetos.
3. Execute o instalador e mantenha as opções padrão, garantindo que o Node.js e o NPM sejam instalados.
4. Após a instalação, feche e abra novamente o VS Code para atualizar o ambiente.

#### Validar a instalação

No VS Code, abra **Terminal → New Terminal** e execute os comandos:

```bash
node -v
npm -v
```

Os comandos devem apresentar os números das versões instaladas. Não é necessário que os números sejam iguais aos exemplos encontrados em tutoriais.

### 2. Preparar o projeto

Abra no VS Code a pasta em que o projeto de automação será desenvolvido.

No terminal integrado, execute:

```bash
npm init playwright@latest
```

Esse comando inicia o assistente de configuração do Playwright para um novo projeto.

Durante a configuração, selecione:

- **Language:** JavaScript.
- **Tests folder:** `tests`, ou o nome desejado para a pasta dos testes.
- **Add a GitHub Actions workflow:** escolha conforme o momento do projeto; a configuração de CI pode ser feita posteriormente.
- **Install Playwright browsers:** confirme a instalação dos navegadores quando solicitado.

O assistente poderá criar arquivos como `package.json`, `playwright.config.js` e a pasta de testes, conforme as opções selecionadas.

**Importante:** se o projeto do curso já tiver um `package.json` e estiver configurado, não execute novamente a inicialização por cima dele. Nesse caso, siga as instruções do curso e instale as dependências existentes com `npm install`.

### 3. Instalar os navegadores do Playwright

Caso não tenham sido instalados durante a configuração, execute:

```bash
npx playwright install
```

Esse comando baixa os navegadores necessários para executar os testes com o Playwright.

### 4. Executar os testes

Para executar a suíte de testes, utilize:

```bash
npx playwright test
```

Para abrir a interface interativa de execução e depuração:

```bash
npx playwright test --ui
```

Para visualizar o relatório HTML após uma execução:

```bash
npx playwright show-report
```

O relatório estará disponível se tiver sido gerado pela execução anterior.

### 5. Versionar o projeto no GitHub

Depois de configurar o ambiente e executar os primeiros testes:

1. Salve os arquivos no VS Code.
2. Acesse **Controle do Código-Fonte**.
3. Prepare os arquivos que deseja registrar.
4. Escreva uma mensagem descritiva para o commit.
5. Clique em **Commit** e depois em **Sync Changes** ou **Push** para enviar as alterações ao GitHub.

Não publique senhas, tokens, arquivos `.env` ou informações confidenciais.

---

## 📈 Próximas etapas

- [ ] Configurar e validar o ambiente de desenvolvimento.
- [ ] Criar e executar os primeiros testes automatizados.
- [ ] Praticar seletores, assertions e validações.
- [ ] Organizar os testes e aplicar o padrão Page Object Model.
- [ ] Configurar relatórios e evidências de execução.
- [ ] Implementar integração contínua com GitHub Actions.

**Status:** projeto de estudos em desenvolvimento contínuo.

## 🧪 Estratégia de testes

O projeto será desenvolvido progressivamente, contemplando:

- Testes funcionais e de regressão.
- Cenários positivos e negativos.
- Validação de elementos, mensagens e resultados esperados.
- Organização e reutilização de código.
- Análise de falhas e evidências de execução.

## 📂 Estrutura do projeto

A estrutura será atualizada conforme a evolução da automação.

```text
qa-automation-playwright/
├── tests/                 # Cenários automatizados
├── playwright.config.js   # Configurações do Playwright
├── package.json           # Dependências e scripts
├── .gitignore             # Arquivos ignorados pelo Git
└── README.md              # Documentação do projeto
```

## ▶️ Como executar os testes

Após configurar o ambiente e instalar as dependências:

```bash
npm install
npx playwright install
npx playwright test
```

Os comandos poderão variar conforme a configuração e os scripts definidos no projeto.

## 📈 Evolução do projeto

- [x] Criação do repositório e controle de versão.
- [ ] Configuração inicial do Playwright.
- [ ] Implementação dos primeiros cenários automatizados.
- [ ] Organização e reutilização de código.
- [ ] Configuração de relatórios e evidências.
- [ ] Integração contínua com GitHub Actions.

## 👩‍💻 Sobre o projeto

Este repositório faz parte da minha evolução profissional em Quality Assurance, com foco em automação de testes, qualidade de software e melhoria contínua.

O desenvolvimento é incremental, priorizando código legível, testes confiáveis e documentação clara.

---

**Projeto de estudos em constante evolução.** 🚀