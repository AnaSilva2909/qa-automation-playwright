const { chromium } = require('playwright');

// Importa o Chromium do Playwright para controlar o navegador.



(async() => {

    // Abre o navegador visivelmente.
    // slowMo: 50 adiciona um pequeno intervalo entre as ações.
    const browser = await chromium.launch({ headless: false, slowMo: 50 });

    // Cria um contexto isolado para a sessão do navegador.
    const context = await browser.newContext();

    // Abre uma nova página no navegador.
    const page = await context.newPage();

    // Acessa a página de login.
    await page.goto('https://demo.realworld.show/login');

    // Localiza o campo de e-mail e preenche com o endereço informado.
    await page.fill('input[type = "email"]', 'teste5889@email.com');

    // Pressiona Tab para mudar o foco para o próximo campo.
    await page.press('input[type = "email"]', 'Tab');

    // Digita a senha no campo correspondente.
    await page.type('input[type = "password"]', 'test123');

    // Clica no botão Sign in com configurações específicas.
    // position: define a posição do clique dentro do elemento.
    // button: define o botão do mouse utilizado.
    // modifiers: permite usar teclas modificadoras, como Shift.
    // force: força a ação mesmo se houver alguma condição de interação.
    // timeout: define o tempo máximo de espera em milissegundos.
    // await page.click('form >> "Sign in"', {
    //     position: { x: 0, y: 0 },
    //     button: 'left',
    //     modifiers: ['Shift'],
    //     force: true,
    //     timeout: 45000
    // });

    // Realiza um duplo clique no botão Sign in.
    // await page.dblclick('form >> "Sign in"');

    // Coloca o foco no elemento Sign in, sem clicar nele.
    await page.focus('form >> "Sign in"');
    await page.click('form >> "Sign in"');

    // Fecha o navegador após executar as ações.
    await browser.close();
})();





/*
// Cria uma função assíncrona para executar as ações do teste.
(async() => {

    // Abre o navegador visivelmente na tela.
    // headless: false permite acompanhar a execução.
    // slowMo: 50 desacelera as ações para facilitar a visualização.
    //const browser = await chromium.launch({ headless: false, slowMo: 50 });

    // Cria um contexto isolado para a sessão do navegador.
    //const context = await browser.newContext();

    // Cria uma nova página dentro do contexto.
    //const page = await context.newPage();

    // Acessa a aplicação TodoMVC.
  //  await page.goto('https://demo.realworld.show/login');

    // Localiza o campo de nova tarefa pela classe CSS .new-todo.
    // Preenche o campo com o texto Task_1.
    await page.fill('.new-todo', 'Task_1');

    // Pressiona Enter para adicionar a primeira tarefa.
    await page.press('.new-todo', 'Enter');

    // Preenche novamente o campo com o texto Task_2.
    await page.fill('.new-todo', 'Task_2');

    // Pressiona Enter para adicionar a segunda tarefa.
    await page.press('.new-todo', 'Enter');

    // Localiza a primeira caixa de seleção com a classe .toggle
    // e marca a tarefa correspondente como concluída.
    await page.check('.toggle');

    // Localiza todas as caixas de seleção que possuem a classe .toggle.
    // O resultado é uma lista de elementos encontrados na página.
    const elements = await page.$$('.toggle');

    // Percorre todos os elementos encontrados na lista.
    elements.forEach(element => {

        // Marca cada caixa de seleção como concluída.
        // Este comando é assíncrono; o ideal é aguardar sua execução.
        element.check();

    });



})();*/