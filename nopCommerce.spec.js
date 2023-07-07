import {test,expect} from '@playwright/test'
import {RegisterPage} from '../tests/PageObjects/Register'
import { LoginPage } from '../tests/PageObjects/Login'
import { addLevis } from '../tests/PageObjects/addLevis'
import {changeQuantity } from '../tests/PageObjects/change';


test('nopCommerce Something new', async ({ page }) => {
    const register = new RegisterPage(page);
    const login =  new LoginPage(page);
    const randomMail = register.generateRandomEmail();
    const AddLevis = new addLevis(page);
    const ChangeQuantity = new changeQuantity(page);

    
    await register.goToRegisterPage();
    await register.Register(randomMail);
    await expect(page.locator('.result')).toHaveText('Your registration completed');
    await login.goToLogin();
    await login.Login(randomMail);
    await expect(page.locator('.ico-account')).toHaveText('My account');
    await AddLevis.AddLevis();
    await expect(page.locator("#updatecart")).toBeVisible();
    // await ChangeQuantity.ChangeQuantity();
    const finalPrice = await ChangeQuantity.ChangeQuantity();
    await expect(page.locator('.product-subtotal')).toHaveText(String(finalPrice));
   
});