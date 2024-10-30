const productName = "Nike react phantom run flyknit 2";
describe("Demo evershop site automation", () => {
    it("Successfully added product into card", async() => {
    await browser.url("https://demo.evershop.io/");
    await $("//a[@class='search-icon']").click();
    await $("//input[@placeholder='Search']").setValue('Nike');
    await browser.keys("Enter");
    await $(`//a[contains(@href, '182')]/span[contains(text(), '${productName}')]`).click();
    await $("//a[@href='#' and contains(text(), 'S')]").click();
    await browser.pause(1000);
    await $("//a[@href='#' and contains(text(), 'Black')]").click();
    await browser.pause(2000);
    //await $("//input[@name='qty']").clear();
    await $("//input[@name='qty']").setValue(2);
    await browser.pause(2000);
    await $("//button[contains(.., 'ADD TO CART')]").click();
    await browser.pause(2000);
    await $("//a[@href='/cart' and contains(text(),'VIEW CART')]").click();
    // await browser.pause(2000);
    // await $("//a[@href='/checkout' and contains(text(), '')]").click();
    // await browser.pause(2000);
    //await browser.quit();
    
    })
})