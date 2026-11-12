// Importa o Chromium do Playwright para controlar o navegador
const { chromium } = require('playwright');

// Importa a biblioteca Expect para realizar validações nos testes
const expect = require('expect');

// Cria uma função assíncrona para executar os comandos em sequência
(async () => {

    // Abre o navegador Chromium em modo visível
    const browser = await chromium.launch({ headless: false });

    // Cria um novo contexto (sessão isolada do navegador)
    const context = await browser.newContext();

    // Abre uma nova página no navegador
    const page = await context.newPage();

    // Acessa a página de login da aplicação
    await page.goto('https://demo.realworld.show/login');

    // Localiza o campo de e-mail e preenche com o valor informado
    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br');

    // Pressiona a tecla Tab para avançar para o próximo campo
    await page.press('input[type = "email"]', 'Tab');

    // Localiza o campo de senha e digita o valor informado
    await page.type('input[type = "password"]', 'test123');

    // Localiza e clica no botão Sign in para realizar o login
    await page.click("form >> 'Sign in'");

    // Captura o HTML interno do elemento com a classe feed-toggle
    const html = await page.innerHTML('.feed-toggle');

    // Valida se o HTML capturado contém o texto "Your Feed"
    expect(html).toMatch('Your Feed');

    // Captura uma imagem da página após a realização do login
    // path: define o nome e o local onde a imagem será salva
    // fullPage: true captura a página inteira, inclusive a parte fora da área visível
    await page.screenshot({ path: 'SignIn.png', fullPage: true });

    // Fecha o navegador após finalizar as ações
    await browser.close();

})();