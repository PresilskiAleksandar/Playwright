exports.addShoes = class addShoes{
    constructor(page){
        this.page = page;
        this.apparel = page.locator(".top-menu.notmobile>li:nth-child(3)");
        this.shoes = page.locator("h2[class='title'] a[title='Show products in category Shoes']")
        this.adidasCampus = page.locator('.product-title > a[href="/adidas-consortium-campus-80s-running-shoes"]')
        this.selectSize = page.locator("#product_attribute_9")
        this.addAdidas = page.locator('button[class="button-1 add-to-cart-button"]')
        this.goBackToShoes = page.locator('a[href="/shoes"] > span')
        this.nikeFloral = page.locator(".product-title > a[href$='/nike-floral-roshe-customized-running-shoes']")
        this.nikeSelectSize = page.locator('#product_attribute_6 ')
        this.nikeSelectColor = page.locator('#product_attribute_7 ')
        this.nikeSelectPrint = page.locator("label[for='product_attribute_8_19'] span[class='attribute-square']")
        this.addNike = page.locator('#add-to-cart-button-24')
        this.addNikeSB = page.locator('.product-title > a[href="/nike-sb-zoom-stefan-janoski-medium-mint"]')
        this.addNikeCart = page.locator('#add-to-cart-button-26')
        this.goToHomePage = page.locator('a[href="/"] > span')
        this.goToShoppingCart = page.locator('.ico-cart')
        
    }

    async addShoes(){
        await this.apparel.click();
        await this.shoes.click();
        await this.adidasCampus.click();
        await this.selectSize.selectOption({value:'21'});
        await this.addAdidas.click();
        await this.goBackToShoes.click();
        await this.nikeFloral.click();
        await this.nikeSelectSize.selectOption({value:'13'})
        await this.nikeSelectColor.selectOption({value:'17'})
        await this.nikeSelectPrint.click()
        await this.addNike.click();
        await this.goBackToShoes.click();
        await this.addNikeSB.click();
        await this.addNikeCart.click();
        await this.goToHomePage.click();
        await this.goToShoppingCart.click();

        
    }
}