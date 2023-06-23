import {test,expect} from '@playwright/test'
import {RegisterPage} from '../tests/PageObjects/Register'
import { LoginPage } from '../tests/PageObjects/Login'

test('nopCOmmerce Demo POM', async ({ page }) => {
    const register = new RegisterPage(page);
    const login =  new LoginPage(page);
  
    await register.goToRegisterPage();
    await register.Register();
    await expect(page.locator('.result')).toHaveText('Your registration completed');
    // Add assertions to validate the registration process
    await login.goToLogin();
    await login.Login();
    await expect(page.locator('.ico-account')).toHaveText('My account');
  });

