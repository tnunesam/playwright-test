// pages/loginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    // Encontramos o container do formulário de login primeiro
    const loginForm = page.locator('.card__login');

    // Agora, procuramos os inputs DENTRO daquele container
    this.emailInput = loginForm.locator('input[type="email"]');
    this.passwordInput = loginForm.locator('input[type="password"]');
    this.accessButton = page.getByRole('button', { name: 'Acessar' });
    this.modalText = page.locator('#modalText');
    this.requiredFieldWarning = page.locator('.input__warging');
  }

  async navigate() {
    await this.page.goto('https://bugbank.netlify.app/');
  }

  // Novo método para apenas preencher
  async fillCredentials(email, password) {
    if (email) await this.emailInput.fill(email);
    if (password) await this.passwordInput.fill(password);
  }

  // Novo método para apenas clicar
  async clickLoginButton() {
    await this.accessButton.click();
  }

  // Método antigo que faz as duas coisas
  async login(email, password) {
    await this.fillCredentials(email, password);
    await this.clickLoginButton();
  }

  async getModalMessage() {
    return this.modalText.textContent();
  }
  
  async getRequiredFieldMessage() {
    return this.requiredFieldWarning.first().textContent();
  }
}

module.exports = { LoginPage };