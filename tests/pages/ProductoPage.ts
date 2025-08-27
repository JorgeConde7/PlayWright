import { Page, Locator } from 'playwright';

export class ProductoPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async agregarProducto(productName: string) {
   const product = this.page.locator('.inventory_item', { hasText: productName });
  await product.locator('button').click();
  }

  async clickCarrito() {
    await this.cartIcon.click();
      await this.page.waitForTimeout(3000);
  }
}
