import {test,expect} from '@playwright/test'

test('Demo login Test 1',async({page})=>{

    await page.goto('https://www.saucedemo.com/v1/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()


})