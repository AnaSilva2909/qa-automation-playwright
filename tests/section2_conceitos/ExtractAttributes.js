
// Importa o Chromium do Playwright para controlar o navegador
const { chromium } = require('playwright');

// Inicia uma função assíncrona para executar os comandos em sequência
(async () => {

    // Abre o navegador Chromium
   const browser = await chromium.launch({ headless: false, slowMo: 50 });

    // Cria um novo contexto (sessão isolada do navegador)
    const context = await browser.newContext();

    // Abre uma nova página no navegador
    const page = await context.newPage();

    // Acessa a página de login da aplicação
    await page.goto('https://demo.realworld.show/login');

    // Localiza o campo de e-mail e preenche com o valor informado
    await page.fill('input[type = "email"]', 'teste5889@email.com');

    // Pressiona a tecla Tab para sair do campo de e-mail e avançar
    await page.press('input[type = "email"]', 'Tab');

    // Localiza o campo de senha e digita o valor informado
    await page.type('input[type = "password"]', 'test123');

    // Localiza e clica no botão Sign in para realizar o login
    await page.click('form >> "Sign in"');

    // Aguarda 5 segundos para permitir que a página carregue
    await page.waitForTimeout(5000);

    // Localiza o elemento da marca (logo) e captura somente seu texto
    const logoText = await page.$eval('(//a[@class="preview-link"]/h1)[1]', el => el.innerText);

    // Exibe no console o texto capturado da logo
    console.log('logoText: ' + logoText);

    // Localiza todos os elementos com a classe tag-default e conta quantos existem
    const popularTagsCount = await page.$$eval('.preview-link', el => el.length);

    // Exibe no console a quantidade de tags encontradas
    console.log('popularTagsCount: ' + popularTagsCount);

    /*// Localiza a logo e captura o endereço do link (href) diretamente pelo elemento HTML
    const logoHref = await page.$eval('.navbar-brand', el => el.href);

    // Exibe no console o endereço capturado
    console.log('logoHref: ' + logoHref);

    // Localiza todos os elementos com a classe tag-default e conta quantos existem
    const popularTagsCount = await page.$$eval('.preview-link', el => el.length);

    // Exibe no console a quantidade de tags encontradas
    console.log('popularTagsCount: ' + popularTagsCount);

    // Captura o conteúdo textual do elemento navbar-brand
    const content = await page.textContent('.navbar-brand');

    // Exibe no console o conteúdo capturado
    console.log('content: ' + content);

    // Captura o texto visível do elemento navbar-brand
    const text = await page.innerText('.navbar-brand');

    // Exibe no console o texto visível capturado
    console.log('text: ' + text);

    // Captura o conteúdo HTML interno do elemento feed-toggle
    const html = await page.innerHTML('.feed-toggle');

    // Exibe no console o HTML capturado
    console.log('html: ' + html);

    // Captura o valor do atributo href do elemento navbar-brand
    const href = await page.getAttribute('.navbar-brand', 'href');

    // Exibe no console o valor do atributo href
    console.log('href: ' + href);*/

    // Fecha o navegador após finalizar todas as ações
    await browser.close();

})();
