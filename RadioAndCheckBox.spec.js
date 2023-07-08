import {test,expect} from '@playwright/test'

test('Radio Buttons' , async ({page})=>{
    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    //radiobutton
    await page.locator('#female').check();
    await expect(page.locator('#female')).toBeChecked();
    await expect(page.locator('#female').isChecked()).toBeTruthy();

    //checkbox

    await page.locator('#tuesday').check();
    await expect(page.locator('#tuesday')).toBeChecked();
    await page.waitForTimeout(200);

    const checkboxesLocators = [
        '#monday',
        '#saturday',
        '#sunday'
    ]

    for(const locator of checkboxesLocators){  //select multiple chebox
        await page.locator(locator).check()
    }

    for(const locator of checkboxesLocators){  // unselect same checkbox

        if(page.locator(locator).isChecked())
        await page.locator(locator).uncheck()
    }

   
})