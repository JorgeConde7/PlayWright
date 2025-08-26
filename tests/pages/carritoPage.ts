import { Page, Locator } from 'playwright';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async hasProduct(productName: string): Promise<boolean> {
    return await this.page.locator(`text=${productName}`).isVisible();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}