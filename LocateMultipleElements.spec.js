import{test,expect} from '@playwright/test'

test.skip('Locate Multiple links',async ({page})=>{

    await page.goto('https://www.demoblaze.com')
    const links = await page.$$('a')
    for(const link of links){
        const linktext = await link.textContent();
        console.log(linktext)

    }

    
})
test('Locate Multiple product text', async ({ page }) => {

    await page.goto('https://www.demoblaze.com');
    await page.waitForSelector('div[id="tbodyid"]>div>div>div>h4>a');

    const allLinkText = await page.$$('div[id="tbodyid"]>div>div>div>h4>a');
    const randomIndex = Math.floor(Math.random() * allLinkText.length);
    const randomLink = allLinkText[randomIndex];

    const prodname = await randomLink.textContent();
    console.log(prodname);

    await randomLink.click();

});

