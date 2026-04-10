//import {utils} from '../utility.json'
const utils = require('../utility.json'); 
class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators loaded from utility.json
    this.loginlink   = page.locator(utils.loginPage.loginlink);
    this.usernameInput = page.locator(utils.loginPage.usernameInput);
    this.passwordInput = page.locator(utils.loginPage.passwordInput);
    this.loginbuttonclik   = page.locator(utils.loginPage.loginbuttonclik);
  }

  /** Login page ui  */
  async LoginPagegoto() {
    await this.page.goto(utils.url.baseUrl);
    await this.loginlink.waitFor({ state: 'visible' });
    await this.loginlink.click();
    await this.usernameInput.fill(utils.credentials.username);
    await this.passwordInput.fill(utils.credentials.password);
    await this.loginbuttonclik.click();
  }
}
module.exports = { LoginPage };


