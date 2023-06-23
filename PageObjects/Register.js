exports.RegisterPage = class RegisterPage {
    constructor(page) {
      this.page = page;
      this.register_url = 'https://demo.nopcommerce.com/register?returnUrl=%2F';
      this.gender_Rb = page.locator('#gender-male');
      this.First_name = page.locator('#FirstName');
      this.Last_Name = page.locator('#LastName');
      this.Day_DD = page.locator("select[name='DateOfBirthDay']");
      this.Month_DD = page.locator("select[name='DateOfBirthMonth']");
      this.Year_DD = page.locator("select[name='DateOfBirthYear']");
      this.Email = page.locator('#Email');
      this.Password = page.locator('#Password');
      this.Confirm_password = page.locator('#ConfirmPassword');
      this.click_register = page.locator('button[id="register-button"]');
    }
  
    async goToRegisterPage() {
      await this.page.goto(this.register_url);
    }
  
    async Register() {
      await this.gender_Rb.click();
      await this.First_name.fill('Aleksandar');
      await this.Last_Name.fill('Presilski');
      await this.Day_DD.selectOption({ label: '23' });
      await this.Month_DD.selectOption({ label: 'September' });
      await this.Year_DD.selectOption({ label: '1990' });
      await this.Email.fill('test1235@gmail.com');
      await this.Password.fill('Test123');
      await this.Confirm_password.fill('Test123');
      await this.click_register.click();
    }
  };