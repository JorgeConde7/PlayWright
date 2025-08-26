import { Page, Locator } from 'playwright';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProduct(productName: string) {
    // Localiza el producto por nombre y da clic en su botón de agregar
    await this.page.locator(`text=${productName}`).locator('xpath=..').locator('button').click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
