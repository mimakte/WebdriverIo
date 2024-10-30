//const addToCartLocators = require("../addToCart/addToCartLocators");
const addToCartLocators = require("../addToCart/addToCartLocators");
const utility = require("../../utilities/utility");

class AddToCartActions{
    async clickOnProductfromList(productName){
      await addToCartLocators.productFromList(productName).click();
    }

    async selectProductSize(){
        await addToCartLocators.productSize.click();
        await browser.pause(3000);
    }

    async selectColor(){
     await addToCartLocators.productColor.click();
     await browser.pause(3000);   
    }

    async enterProductQty(qty){
        await addToCartLocators.inpurtQtyField.setValue(qty);
    }

    async clickOnAddToCartButton(){
        await addToCartLocators.buttonaddToCart.click();
    }

    async clickOnViewCartButton(){
        await addToCartLocators.buttonViewCartFromModal.click();
    }

    async getSingleProductPrice(){
       const productPrice = await addToCartLocators.priceFromeProductPage.getText();
       const productPriceInTONumber = await utility.convertTextToNumber (productPrice);
       return productPriceInTONumber;
    }
}




module.exports = new AddToCartActions();