exports.ValidatePriceLevi = class ValidatePriceLevi {
    constructor(page) {
      this.page = page;
      this.qty = page.locator('.qty-input');
      this.price = page.locator('.product-unit-price');
      this.update = page.locator('#updatecart');
    }
  
    async validatePriceLevi() {
        await this.qty.fill('4');
        await this.update.click()
        const value = await this.qty.inputValue();
      if (value >= 3) {
        // await this.qty.fill('3');
        // await this.update.click();
        const priceResponse = await this.price.innerText();
        console.log('Price Response:', priceResponse);
        return priceResponse
      } else if (value >= 6) {
        // await this.qty.fill('6');
        // await this.update.click();
        const priceResponse = await this.price.innerText();
        console.log('Price Response:', priceResponse);
        return priceResponse
      } else {
        // await this.qty.fill('10');
        const priceResponse = await this.price.innerText();
        console.log('Price Response:', priceResponse);
        return priceResponse
      }
    }
  };