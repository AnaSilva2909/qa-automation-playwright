// ************ Esse teste realiza o preenchimento e acesso de Login ************

// Importa o Chromium do Playwright para controlar o navegador.
const { chromium } = require('playwright');
const URL = "https://www.qapractice.com/practice-login-form";
const usuario = "user@premiumbank.com";
const senha = "Bank@123";

(async () => {

    // Abre o navegador visivelmente na tela.
    const browser = await chromium.launch({ headless: false });
    // Cria uma sessão isolada do navegador.
    const context = await browser.newContext();
    // Cria uma página dentro da sessão.
    const page = await context.newPage();
    // Acessa a URL informada.
    await page.goto(URL);
//-----------------------------------------------------------

//Preenchendo usúario, senha e acessa

// Localiza o campo de e-mail e preenche com o usuário informado.
const user = await page.locator('input[type="email"]');
await user.fill(usuario);

const password = await page.locator('input[id="login-password"]');
await password.scrollIntoViewIfNeeded();
await password.fill(senha);

//seleciona botão de Sing in
const singIn = await page.locator('button[id="login-submit"]');
await singIn.scrollIntoViewIfNeeded();
await singIn.click();
await page.waitForTimeout(5000);

const mensagem = await page.locator('#login-success').textContent();

if (mensagem.trim() === 'Login Successful! Welcome to Premium Banking.') {
    console.log('Teste aprovado!');
} else {
    console.log('Teste reprovado!');
}

await page.screenshot({ path: 'todo.png' });

// Fecha o navegador.
await browser.close();

})();


//Interação de elementos > Exemplos de mapeamento

    // HTML class: localiza um elemento pela classe CSS.
    // const signIn = await page.$('.btn');


    // CSS selector: localiza um elemento usando CSS.
    // const signIn = await page.$('css=button');
    // const signIn = await page.$('button');


    // XPath: localiza um elemento usando uma expressão XPath.
    // const signIn = await page.$('//button[@id="login-submit"]');
    // const signIn = await page.$('//button[@type = "submit"]');


    // Text content: localiza um elemento pelo texto exibido.
    // const signIn = await page.$('text="Sign in"');
    // const signIn = await page.$('text=Sign in');
    // const signIn = await page.$('"Sign in"');
    // const signIn = await page.$("'Sign in'");


    // Element Handle: localiza um formulário para buscar elementos dentro dele.
    //const form = await page.$('css=form');

    // Procura o elemento "Sign in" dentro do formulário.
    // const signIn = await form.$("'Sign in'");


    // Combina seletores para localizar "Sign in" dentro de um formulário.
    //const signIn = await page.$("css=form >> 'Sign in'");
    // const signIn = await page.$("form >> 'Sign in'");

    // Clica no elemento localizado.
   // await signIn.click();


    // Localiza todos os elementos que possuem a classe "form-control".
   // const input = await page.$$('.form-control');

    // Clica no primeiro elemento encontrado (índice 0).
  //  await input[0].click();

    // Clica no segundo elemento encontrado (índice 1).
   // await input[1].click();




