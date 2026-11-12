// Importa o Chromium do Playwright para controlar o navegador
const { chromium } = require('playwright');

// Importa a biblioteca Expect para realizar validações nos testes
const expect = require('expect');

// Cria uma função assíncrona para executar os comandos em sequência
(async () => {

    // Abre o navegador Chromium em modo visível
    // slowMo: 50 adiciona um intervalo de 50 milissegundos entre as ações
    const browser = await chromium.launch({ headless: false, slowMo: 50 });

    // Cria um novo contexto (sessão isolada do navegador)
    const context = await browser.newContext();

    // Define o tempo máximo de espera padrão para as ações do contexto
    // Neste caso, as operações terão até 45 segundos para serem concluídas
    context.setDefaultTimeout(45000);

    // Abre uma nova página no navegador
    const page = await context.newPage();

    // Define o tempo máximo de espera padrão para as ações desta página
    // Também será de 45 segundos
    page.setDefaultTimeout(45000);

    // Acessa a página de login da aplicação
    await page.goto('https://react-redux.realworld.io/#/login');

    // Captura o título da página
    const title = await page.title();

    // Valida se o título da página é exatamente igual a "Conduit"
    expect(title).toBe('Conduit');

    // Localiza o campo de e-mail e preenche com o valor informado
    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com');

    // Pressiona a tecla Tab para avançar para o próximo campo
    await page.press('input[type = "email"]', 'Tab');

    // Localiza o campo de senha e digita o valor informado
    await page.type('input[type = "password"]', 'test123');

    // Exemplo de clique simples no botão Sign in
    // Este comando está comentado e não será executado
    // await page.click('form >> "Sign in"');

    // Clica no botão Sign in definindo um tempo máximo de espera de 45 segundos
    await page.click('form >> "Sign in"', { timeout: 45000 });

    // Aguarda 5 segundos após o login (comando comentado, não será executado)
    // await page.waitForTimeout(5000);

    // Aguarda até que o elemento ion-compose apareça na página
    // Comando comentado, não será executado
    // await page.waitForSelector('.ion-compose');

    // Exemplo de espera por navegação junto com o clique no botão de login
    // Promise.all permite aguardar duas operações ao mesmo tempo
    // Este exemplo está comentado e não será executado
    // await Promise.all([
    //     page.waitForNavigation(), // Aguarda a navegação ser concluída
    //     page.click('form >> "Sign in"') // Clica no botão que pode provocar a navegação
    // ]);

    // Aguarda a abertura de uma nova aba e captura essa página
    const [newPage] = await Promise.all([

        // Aguarda o evento de abertura de uma nova página no contexto
        context.waitForEvent('page'),

        // Clica no link que possui o atributo target="_blank"
        // Esse atributo faz o link abrir em uma nova aba
        page.click('a[target="_blank"]')
    ]);

    // Aguarda o carregamento da nova aba até o estado padrão de carregamento
    await newPage.waitForLoadState();

    // Fecha o navegador após finalizar as ações
    await browser.close();

})();
