const utils = require('./utility.json');
module.exports = { HomeProductPage };
class HomeProductPage {
  constructor(page) {
    this.page = page;

    // All product title links inside the product grid
    this.allProductLinks = page.locator(utils.homeProductPage.allProductLinks);
  }

  /** Wait until at least one product card is rendered */
  async waitForProducts() {
    await this.allProductLinks.first().waitFor({ state: 'visible' });
  }

  /**
   * Fetch the names of every product visible on the home page
   * @returns {Promise<string[]>} array of product name strings
   */
  async getAllProductNames() {
    await this.waitForProducts();
    return this.allProductLinks.allTextContents();
  }

  /**
   * Return the total count of products on the page
   * @returns {Promise<number>}
   */
  async getProductCount() {
    await this.waitForProducts();
    return this.allProductLinks.count();
  }

  /**
   * Select a product by its exact display name
   * @param {string} productName - e.g. 'Samsung galaxy s6'
   */
  async selectProductByName(productName) {
    await this.waitForProducts();
    const xpath = utils.homeProductPage.productByName.replace('{productName}', productName);
    const target = this.page.locator(xpath);
    await target.click();
  }

  /**
   * Select a product by its 0-based index position in the grid
   * @param {number} index - 0 for the first product
   */
  async selectProductByIndex(index = 0) {
    await this.waitForProducts();
    await this.allProductLinks.nth(index).click();
  }

  /**
   * Retrieve the name of the product at a specific index (before clicking)
   * @param {number} index
   * @returns {Promise<string>}
   */
  async getProductNameByIndex(index = 0) {
    await this.waitForProducts();
    return this.allProductLinks.nth(index).textContent();
  }
}


