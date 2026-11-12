// Importa o Chromium do Playwright para controlar o navegador
const { chromium } = require('playwright');

// Importa a biblioteca Expect para realizar validações nos testes
const expect = require('expect');

// Cria uma função assíncrona para executar os comandos em sequência
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

    // Pressiona a tecla Tab para avançar para o próximo campo
    await page.press('input[type = "email"]', 'Tab');

    // Localiza o campo de senha e digita o valor informado
    await page.type('input[type = "password"]', 'test123');

    // Localiza e clica no botão Sign in para realizar o login
    await page.click('form >> "Sign in"');

    // Aguarda 5 segundos para permitir que a página carregue
    await page.waitForTimeout(5000);

    // Localiza o elemento navbar-brand e captura seu texto interno
    const logoText = await page.$eval('(//a[@class="preview-link"]/h1)[1]', el => el.innerText);
    console.log('logoText: ' + logoText)
    // Valida se o texto capturado é exatamente igual a "conduit"
    expect(logoText).toBe('conduit');
/*
    // Localiza o elemento navbar-brand e captura seu endereço completo
    const logoHref = await page.$eval('.navbar-brand', el => el.href);

    // Valida se o endereço capturado não está vazio ou indefinido
    expect(logoHref).toBeDefined();

    // Localiza todos os elementos com a classe tag-default e conta quantos existem
    const popularTagsCount = await page.$$eval('.tag-default', el => el.length);

    // Valida se a quantidade de tags é maior ou igual a 5
    expect(popularTagsCount).toBeGreaterThanOrEqual(5);

    // Valida se a quantidade de tags é menor ou igual a 30
    expect(popularTagsCount).toBeLessThanOrEqual(30);

    // Valida se a quantidade de tags é exatamente igual a 20
    expect(popularTagsCount).toEqual(20);

    // Captura o conteúdo textual do elemento navbar-brand, incluindo espaços e quebras de linha
    const content = await page.textContent('.navbar-brand');

    // Exibe o conteúdo capturado no console (comando comentado, não será executado)
    // console.log('content: ' + content);

    // Captura o texto visível do elemento navbar-brand
    const text = await page.innerText('.navbar-brand');

    // Exibe o texto capturado no console (comando comentado, não será executado)
    // console.log('text: ' + text);

    // Captura o HTML interno do elemento feed-toggle
    const html = await page.innerHTML('.feed-toggle');

    // Valida se o HTML capturado contém o texto "Your Feed"
    expect(html).toMatch('Your Feed');

    // Valida se o HTML contém "Global Feed" (comando comentado, não será executado)
    // expect(html).toMatch('Global Feed');

    // Valida se o HTML contém "Global Feeds" (esta validação deve falhar se o texto não existir)
    expect(html).toMatch('Global Feeds'); // should fail

    // Captura o valor do atributo href do elemento navbar-brand
    const href = await page.getAttribute('.navbar-brand', 'href');

    // Valida se o href NÃO contém o endereço completo informado
    expect(href).not.toMatch('https://react-redux.realworld.io');
*/
    // Fecha o navegador após a execução dos comandos
   // await browser.close();

})();
