const checkoutLocators = require("./checoutLocators");
const utility = require("../../utilities/utility");


class checkoutActions{
    async getSubTotalAmount(){
        const subTotal = await checkoutLocators.subTotal.getText();
        const subTotalInNumber = await utility.convertTextToNumber(subTotal);
        return subTotalInNumber; 
    }
    
    async getGrandTotalAmount(){
        const grandTotal = await checkoutLocators.grandTotal.getText();
        const grandTotalInNumber = await utility.convertTextToNumber(grandTotal);
        return grandTotalInNumber;
    }

    async clickOnCheckoutButton(){
        await checkoutLocators.checkoutButton.click();

    }



    }






module.exports = new checkoutActions();