//Importar o Chromium da biblioteca Playwright, permitindo que seu código controle um navegador.
const { chromium } = require('playwright');

// Cria uma função assíncrona para executar as ações do teste.
// O async permite utilizar o await dentro da função.
(async () => {

    // Inicia o navegador Chromium.
    // headless: false faz o navegador abrir visivelmente na tela.
    const browser = await chromium.launch({ headless: false });

    // Estas duas linhas estão comentadas e, por isso, não são executadas.
    // Um context representa uma sessão isolada do navegador.
    const context = await browser.newContext();

    // Cria uma nova página dentro do context.
    // const page = await context.newPage();

    // Cria uma nova página diretamente no navegador.
    // Essa página será utilizada para navegar e interagir com o site.
    const page = await browser.newPage();

    // Acessa o endereço do TodoMVC, uma aplicação de lista de tarefas.
    // O await espera a navegação ser concluída conforme os critérios do Playwright.
    await page.goto('http://todomvc.com/examples/react/#/');

    // Captura uma imagem da página e salva no arquivo todo.png.
    // O arquivo é salvo no diretório de trabalho do script.
    await page.screenshot({ path: 'todo.png' });

    // Fecha o navegador após concluir as ações anteriores.
    await browser.close();

// Executa a função assíncrona criada acima.
})();
