import {test,expect} from '@playwright/test'

test('Assertions Demo',async({page})=>{

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    //Assertion
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toHaveCount(1)
    if (await page.$('.chakra-heading.css-dpmy2a')){

        await page.locator('.chakra-heading.css-dpmy2a').click()
    }
    //check element hidden or visible
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toBeVisible()
   // await expect(page.locator('.chakra-heading.css-dpmy2a')).toBeHidden()

    //check element enabled or disabled
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toBeEnabled()
 //   await expect(page.locator('.chakra-heading.css-dpmy2a')).toBeDisabled()
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toHaveText('The Kitchen')

    await expect(page.locator('.chakra-heading.css-dpmy2a')).toHaveAttribute('class','chakra-heading css-dpmy2a')
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toHaveClass('chakra-heading css-dpmy2a')

    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('The Kitchen')
    //visual validation with screenshot
    // await expect(page).toHaveScreenshot()
    
})