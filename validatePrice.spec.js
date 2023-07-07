import {test,expect} from '@playwright/test'
import { addLevis } from '../tests/PageObjects/addLevis'
import {RegisterPage} from '../tests/PageObjects/Register'
import { ValidatePriceLevi } from '../tests/PageObjects/validatePriceLevi';


test('nopCommerce Something new', async ({ page }) => {

    const AddLevis = new addLevis(page);
    const register = new RegisterPage(page);
    const validatePriceLevi = new ValidatePriceLevi(page);


    await register.goToRegisterPage();
    await AddLevis.AddLevis();
    await expect(page.locator("#updatecart")).toBeVisible();
    await validatePriceLevi.validatePriceLevi();
    

});