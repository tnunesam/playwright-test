// pages/homePage.js
const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.welcomeText = page.locator('#textName');
    this.homeUrl = 'https://bugbank.netlify.app/home';
  }

  async assertUserIsLoggedIn() {
    await expect(this.page).toHaveURL(this.homeUrl);
    await expect(this.welcomeText).toBeVisible();
  }
}

module.exports = { HomePage };