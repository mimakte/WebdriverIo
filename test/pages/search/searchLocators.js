class searchLocators{
    get searchIcon(){
       return $("//a[@class='search-icon']");
    }

    get searchInputField(){
        return  $("//input[@placeholder='Search']");
    }

    productList(number){
        return $(`(//div[contains(@class,'product-name')])[${number}]`);
    }


}
module.exports = new searchLocators();