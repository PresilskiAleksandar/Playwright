import {test,expect} from '@playwright/test'
import {RegisterPage} from '../tests/PageObjects/Register'
import { LoginPage } from '../tests/PageObjects/Login'
import { addShoes} from '../tests/PageObjects/AddShoes'
import { emptyCart} from '../tests/PageObjects/EmptyCart'

test('nopCOmmerce Demo POM', async ({ page }) => {
    const register = new RegisterPage(page);
    const login =  new LoginPage(page);
    const AddShoes = new addShoes(page);
    const EmptyCart = new emptyCart(page);
    const randomMail = register.generateRandomEmail();
  
    await register.goToRegisterPage();
    await register.Register(randomMail);
    await expect(page.locator('.result')).toHaveText('Your registration completed');
    await login.goToLogin();
    await login.Login(randomMail);
    await expect(page.locator('.ico-account')).toHaveText('My account');
    await AddShoes.addShoes();
    await expect(page.locator("#updatecart")).toBeVisible();
    await EmptyCart.EmptyCart();
    await expect(page.locator('.no-data')).toHaveText('Your Shopping Cart is empty!')

  });


