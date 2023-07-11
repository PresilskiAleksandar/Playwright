import {test,expect} from '@playwright/test'

test("Date Picker",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.fill('#datepicker','06/02/2025')

    //date picker

    const year = '2024'
    const month = 'March'
    const day = '20'

    await page.click('#datepicker')  // opems calendar

    while(true){

      const currentYear = await page.locator('.ui-datepicker-year').textContent()
      const currentMonth = await page.locator('.ui-datepicker-month').textContent()
      if(currentYear == year && currentMonth == month){
        break;
      }
        await page.locator('[title="Next"]').click()

    }

    const dates = await page.$$('.ui-state-default')

    for(const dt of dates)
    {
        if(await dt.textContent()==day){
            await dt.click()
            break
        }
    }

    await page.waitForTimeout(3000)


})