const searchLocators = require("./searchLocators");

class SearchActions{
    async clickOnSearchIcon(){
        await searchLocators.searchIcon.click();
    }

    async enterSearchItemName(productName){
        await searchLocators.searchInputField.setValue(productName);
    }

    async search(productName){
        await this.clickOnSearchIcon();
        await this.enterSearchItemName(productName);
    }

    async selectProduct(num){
      return await searchLocators.productList(num).getText(); 
    }
}
module.exports = new SearchActions();