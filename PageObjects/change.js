exports.changeQuantity = class changeQuantity{

    constructor(page) {
        this.page = page;
        this.qty = page.locator('.qty-input');
        this.clickUpdate = page.locator("#updatecart")
        this.totalPrice = page.locator('.product-subtotal')
        this.price = page.locator('.product-unit-price');
        
      }
      
      async ChangeQuantity() {
        await this.page.waitForSelector('.qty-input');
    
        for (let i = 1; i <= 15; i++) {
            const qtyField = await this.qty.elementHandle();
    
            await qtyField.click();
            await qtyField.focus();
            await this.page.keyboard.down('Control');
            await this.page.keyboard.press('KeyA');
            await this.page.keyboard.up('Control');

            await this.page.keyboard.press('Backspace');
    
            await this.page.keyboard.type(String(i));
    
            await this.clickUpdate.click();
            if (this.qty == 3) {
                // await this.qty.fill('3');
                // await this.update.click();
                const priceResponse = await this.price.innerText();
                console.log('Price Response:', priceResponse);
              
              }

            
              }
        const finalPriceElement = await this.page.locator('.product-subtotal').first();
        const finalPrice = await finalPriceElement.innerText();
    
        console.log(`Final price for : ${finalPrice}`);
        return finalPrice;
    }
}

      
