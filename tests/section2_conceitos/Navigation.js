// Importa o Chromium do Playwright para controlar o navegador
const { chromium } = require('playwright');

// Importa a biblioteca Expect para realizar validações nos testes
const expect = require('expect');

// Cria uma função assíncrona para executar os comandos em sequência
(async () => {

    // Abre o navegador Chromium em modo visível (headless: false)
    // slowMo: 50 adiciona um intervalo de 50 milissegundos entre as ações
    const browser = await chromium.launch({ headless: false, slowMo: 50 });

    // Cria um novo contexto (sessão isolada do navegador)
    const context = await browser.newContext();

    // Abre uma nova página no navegador
    const page = await context.newPage();

    // Acessa a página de login da aplicação
    await page.goto('https://react-redux.realworld.io/#/login');

    // Captura o título da página
    const title = await page.title();

    // Valida se o título da página é exatamente igual a "Conduit"
    expect(title).toBe('Conduit');

    // Localiza o campo de e-mail e preenche com o valor informado
    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br');

    // Pressiona a tecla Tab para avançar para o próximo campo
    await page.press('input[type = "email"]', 'Tab');

    // Localiza o campo de senha e digita o valor informado
    await page.type('input[type = "password"]', 'test123');

    // Localiza e clica no botão Sign in para realizar o login
    await page.click('form >> "Sign in"');

    // Localiza o botão ou link com a classe ion-compose e clica nele
    // Esse elemento direciona para a tela de criação de um novo artigo
    await page.click('.ion-compose');

    // Captura a URL atual da página após o clique
    const url = await page.url();

    // Valida se a URL atual contém a palavra "editor"
    expect(url).toContain('editor');

    // Retorna para a página anterior do histórico do navegador
    await page.goBack();

    // Aguarda 2 segundos para permitir o carregamento da página anterior
    await page.waitForTimeout(2000);

    // Avança novamente para a próxima página do histórico do navegador
    await page.goForward();

    // Aguarda 2 segundos para permitir o carregamento da página
    await page.waitForTimeout(2000);

    // Atualiza (recarrega) a página atual do navegador
    await page.reload();

    // Fecha o navegador após finalizar as ações
    await browser.close();

})();