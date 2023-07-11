import {test,expect} from '@playwright/test'

test('Mouse hover',async({page})=>{

    await page.goto('https://demo-opencart.com/')

    const desktop = await page.locator("li[class='dropdown']>a[href='https://demo-opencart.com/index.php?route=product/category&path=20']")
    const macbook = await page.locator('.list-unstyled > li > a[href="https://demo-opencart.com/index.php?route=product/category&path=20_26"]')

    //mouse hover 

    await desktop.hover()
    await macbook.hover()

})