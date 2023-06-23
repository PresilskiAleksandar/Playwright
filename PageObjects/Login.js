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
  
    async Login() {
      await this.enterEmail.fill('test1235@gmail.com');
      await this.enterPassword.fill('Test123');
      await this.clickLogIn.click();
    }
  };