import {test,expect} from '@playwright/test'

test('Auto Suggest DropDown' ,async ({page})=>{

    await page.goto('https://www.redbus.in')
    
    await page.locator('#src').fill('Delhi');
    await page.waitForSelector(".sc-dnqmqq.eFEVtU>li > div >text")

    const fromCityOptions = await page.$$(".sc-dnqmqq.eFEVtU>li > div >text")

    for(let option of fromCityOptions){
        const value = await option.textContent()
        //console.log(value)
          
          if(value.includes('Anand Vihar')) {

             await option.click()
             break

          }
        }
})