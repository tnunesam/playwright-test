// features/support/hooks.js
const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { HomePage } = require('../../pages/homePage');
const { CadastroPage } = require('../../pages/cadastroPage');

let browser;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  this.page = await browser.newPage();
  this.loginPage = new LoginPage(this.page);
  this.homePage = new HomePage(this.page);
});

After(async function () {
  await browser.close();
});