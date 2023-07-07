exports.addLevis = class addLevis {

        constructor(page){
        this.page = page;
        this.apparel = page.locator('.top-menu.notmobile > li > a[href="/apparel"]')
        this.shoes = page.locator("h2[class='title']>a[href='/clothing']")
        this.addJeans = page.locator('.product-title > a[href="/levis-511-jeans"]')
        this.addToCart = page.locator('#add-to-cart-button-30')
        this.goToHomePage = page.locator('.header-logo>a[href="/"]')
        this.goToShoppingCart = page.locator('#topcartlink')

    }

    async AddLevis(){
        await this.apparel.click();
        await this.shoes.click();
        await this.addJeans.click();
        await this.addToCart.click();
        await this.goToHomePage.click();
        await this.goToShoppingCart.click();
    }
}