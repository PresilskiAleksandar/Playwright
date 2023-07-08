const{test,expect}=require('@playwright/test')

test('Select Value from DropDown',async function({page}){

    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    await page.locator("#state").selectOption({label:'Haryana'})
    await page.waitForTimeout(2000)
    await page.locator("#state").selectOption({value:'Jammu and Kashmir'})
    await page.waitForTimeout(2000)
    await page.locator("#state").selectOption({index:2})
    await page.waitForTimeout(2000)

    /*
    const value= await page.locator("#state").textContent()

    console.log('All dropdown Values '+value)
    await page.waitForTimeout(2000)
    await expect(value.includes("Nagar HaveliDaman")).toBeTruthy()
    */

    let state= await page.$("#state")
    let allElements= await state.$$("option")
    let ddstatus=false

    for(let i=0;i<allElements.length;i++){

       let element= allElements[i]
       let value=await element.textContent()
        if(value.includes("Chhattisgarh")){
            ddstatus=true
            break
        }

       console.log("Value from dropdown using for loop "+value)

       
    }
    await expect(ddstatus).toBeTruthy()

    await page.locator("#hobbies").selectOption(["Reading","Singing"])
    await page.waitForTimeout(2000)
})

test('Multy Select Dropdown', async ({page})=>{

    await page.goto('https://testautomationparctice.blogspot.com')

    await page.selectOption('#colors',['Blue','Red','Yellow'])
})
