const{test,expect} = require('@playwright/test')

test('Verify Error Message',async function({page}){

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().hight)
    await page.getByPlaceholder("Username").fill("Admin")
    await page.locator("input[name='password']").fill('Admin123')
    await page.locator("//button[@type='submit']").click()
    const errorMessage= await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent()
    console.log("Error message is "+errorMessage)
    expect(errorMessage==="Invalid credentials").toBeTruthy()


})