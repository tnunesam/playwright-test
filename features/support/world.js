// features/support/world.js
const { World, setWorldConstructor } = require('@cucumber/cucumber');
const { LoginPage } = require('../../pages/loginPage');
const { HomePage } = require('../../pages/homePage');

class CustomWorld extends World {
  constructor(options) {
    super(options);
    // As propriedades (browser, page, etc.) serão anexadas nos hooks
  }
}

setWorldConstructor(CustomWorld);