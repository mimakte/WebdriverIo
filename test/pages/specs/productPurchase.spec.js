const searchActions = require("../search/searchActions");
const addToCartActions= require("../addToCart/addToCartActions");
const checkoutActions =require("../checkout/checkoutAction");
const utility = require("../../utilities/utility");

//const productName = "Nike react phantom run flyknit 2";
var productName="";
var productQty;

//var singleProductPrice;
describe("Demo evershop site product purchase journey", () => {

    it("Should able to successfuclly search product", async() => {
      const number = await utility.randomNumber(4, 1);
        productName = await searchActions.selectProduct(number);
        await searchActions.clickOnSearchIcon();
        await searchActions.enterSearchItemName(productName);
        await browser.keys("Enter");
    });


it("Should able to successfuclly add product in the cart", async() => {
    await addToCartActions.clickOnProductfromList(productName);
    await addToCartActions.selectProductSize();
    await addToCartActions.selectColor();
    productQty = await utility.randomNumber(10, 1);
    console.log("productQty:" + productQty);
    await addToCartActions.enterProductQty(productQty);
    //singleProductPrice = await addToCartActions.getsingleProductPrice();
    await addToCartActions.clickOnAddToCartButton();
    await addToCartActions.clickOnViewCartButton();
  });


  it("Should successfully verify total amount and grand total amount",async()=>{
    const singleProductPrice = await addToCartActions.getSingleProductPrice();
    const expectedTotalPrice = productQty * singleProductPrice;

    const actualSubTotal = await checkoutActions.getSubTotalAmount();
    const actualGrandTotal = await checkoutActions.getGrandTotalAmount();
    expect(expectedTotalPrice).toEqual(actualSubTotal);
    expect(expectedTotalPrice).toEqual(actualGrandTotal);

  });
});