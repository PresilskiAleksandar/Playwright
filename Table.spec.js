import {test,expect} from '@playwright/test'

test("Handling table",async({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')
    //1)total number of rows and colums

    const colums = await table.locator('thead tr th')
    console.log('Number of colums:',await colums.count())
    expect(await colums.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log('Numbers of rows:', await rows.count())
    expect(await rows.count()).toBe(5)


    // 2) select check box for product 4

    // const matchedRow =  rows.filter({
    //     has : page.locator('td'),
    //     hasText : 'Product 4'
    // })
    // await matchedRow.locator('input').check()
    

    //3) select multiple products by re-usible function

    // await selectProduct(rows,page,'Product 1')
    // await selectProduct(rows,page,'Product 3')
    // await selectProduct(rows,page,'Product 5')

    //4) print all product details using loop

    // for(let i=0;i<await rows.count();i++){

    //    const row = rows.nth(i)
    //    const tds = row.locator('td')


    //     for(let j=0 ; j < await tds.count()-1 ; j++){
    //         console.log( await tds.nth(j).textContent())
    //     }
    // }


    //5) read data from all the pages in the table 

    const pages = await page.locator('.pagination li a')
    console.log('Number of pages', await pages.count())

    for(let p=0; p< await pages.count(); p++)
    {
        if(p>0){
            await pages.nth(p).click()
        }

    }for(let i=0;i<await rows.count();i++){

       const row = rows.nth(i)
       const tds = row.locator('td')

        for(let j=0 ; j < await tds.count()-1 ; j++){
            console.log( await tds.nth(j).textContent())
        }
    }



})

async function selectProduct(rows,page,name){

     const matchedRow =  rows.filter({
        has : page.locator('td'),
        hasText : name
    })
    await matchedRow.locator('input').check()
    
}