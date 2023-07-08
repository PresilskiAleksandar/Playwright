import {test,expect} from '@playwright/test'

test('Locators Builtin', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // get by altText
    const logo =  await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();
    //get by placehgolder
    const Username = await page.getByPlaceholder('Username').fill('Admin')
    const Password = await page.getByPlaceholder('Password').fill('admin123')
    const clickLogin = await page.getByRole('button').click()  
    await Username,Password,clickLogin;

    const name =await page.locator('.oxd-userdropdown-name').textContent()
    await expect(await page.getByText(name)).toBeVisible();
} )