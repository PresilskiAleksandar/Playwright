const{test,expect} = require('@playwright/test')

test('Verify Aplication TItle',async function({page}){

    await page.goto('https://google.com')
    const url= await page.url()

    console.log('Url is '+url)

    const title=await page.title()

    console.log("Title is "+title)
    await expect(page).toHaveTitle('Google')
})