const utils = require('../utility.json');
class HomeProductPage {
  constructor(page) {
    this.page = page;
    //locator loaded from utilities
    this.Samsung_galaxy_s6 = page.locator(utils.HomeProductPage.Samsung_galaxy_s6);
    this.add_to_cart=page.locator(utils.HomeProductPage.Add_to_cart);
    this.cart=page.locator(utils.HomeProductPage.Cart);
    this.Place_order=page.locator(utils.HomeProductPage.Place_order);
  };

    
  /** Homepage page ui  */
  async Homepageui() {
    await this.Samsung_galaxy_s6.waitFor({state:'visible'});
    await this.Samsung_galaxy_s6.click();
    await this.add_to_cart.click();
    await this.cart.click();
     await this.Place_order.waitFor({state:'visible'});
    await this.Place_order.click();

    await this.page.waitForTimeout(5000);

  }

  }
  module.exports = { HomeProductPage };



