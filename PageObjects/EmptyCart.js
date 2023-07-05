exports.emptyCart = class emptyCart {
    constructor(page) {
      this.page = page;
      this.allProducts = page.locator('table > tbody > tr  > td >  button[class="remove-btn"]');
      this.removeBtn = page.locator("td[class='remove-from-cart']>button[class='remove-btn']");
    }
  
    async EmptyCart() {
      const productsCount = await this.allProducts.count();
      console.log(`Number of products in the cart: ${productsCount}`);
  
      for (let i = 0; i < productsCount; i++) {
        
        await this.page.waitForTimeout(500);
        await this.page.waitForLoadState();
        await this.removeBtn.first().click();      
        await this.page.waitForLoadState();
      }
    }
  }