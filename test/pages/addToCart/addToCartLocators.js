class addToCartLocators{
     productFromList(productName){
        return $(`//a[contains(@href,'182')]/span[contains(text(),'${productName}')]`)
    }
    get productSize(){
       return $("//a[@href='#' and contains(text(), 'S')]");
    }

    get productColor(){
        return $("//a[@href='#' and contains(text(), 'Black')]");
    }

    get inpurtQtyField(){
        return $("//input[@name='qty']");
    }

    get buttonaddToCart(){
        return $("//button[contains(.., 'ADD TO CART')]");
    }

    get buttonViewCartFromModal(){
        return  $("//a[@href='/cart' and contains(text(),'VIEW CART')]");
    }

    get priceFromeProductPage(){
        return $("//span[@class='sale-price']")
    }
}
module.exports = new addToCartLocators();