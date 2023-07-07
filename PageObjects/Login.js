const { RegisterPage } = require('../PageObjects/Register');

exports.LoginPage = class LoginPage {
    constructor(page) {
      this.page = page;
      this.loginButton = page.locator('.ico-login');
      this.enterEmail = page.locator('#Email');
      this.enterPassword = page.locator('#Password');
      this.clickLogIn = page.locator("button[class='button-1 login-button']");
 
    }
        async goToLogin() {
            await this.loginButton.click();
    }

    async Login(mail) {

      await this.enterEmail.fill(mail);
      await this.enterPassword.fill('test123456');
      await this.clickLogIn.click();
    }
  };