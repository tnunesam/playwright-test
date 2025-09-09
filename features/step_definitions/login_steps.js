// features/step_definitions/login_steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Given('que o usuário está na tela de login', async function () {
  await this.loginPage.navigate();
});

Given('possui email e senha válidos', async function () {
  console.log('Pré-condição: Usuário possui credenciais válidas.');
});

When('preenche os campos com {string} e {string}', async function (email, senha) {
  await this.loginPage.fillCredentials(email, senha);
});

When('clica em "Acessar"', async function () {
  await this.loginPage.clickLoginButton();
});

When('tenta logar com {string} e {string}', async function (email, senha) {
  await this.loginPage.login(email, senha);
});

Then('o usuário deve ser autenticado com sucesso', async function () {
  await this.homePage.assertUserIsLoggedIn();
});

Then('deve ser redirecionado para a tela home', async function () {
  await expect(this.page).toHaveURL(this.homePage.homeUrl);
});

Then('o sistema deve exibir a mensagem "Usuário ou senha inválido. Tente novamente ou verifique suas informações!"', async function () {
  const modalMessage = await this.loginPage.getModalMessage();
  expect(modalMessage).toBe('Usuário ou senha inválido. Tente novamente ou verifique suas informações!');
});

Then('o sistema deve exibir a mensagem "Usuário e senha precisam ser preenchidos"', async function () {
    const warningMessage = await this.loginPage.getRequiredFieldMessage();
    expect(warningMessage).toBe('É campo obrigatório');
});

Then('o sistema deve impedir o acesso e manter o usuário na tela de login', async function () {
  await expect(this.page).not.toHaveURL(this.homePage.homeUrl);
  await expect(this.page).toHaveURL('https://bugbank.netlify.app/');
});