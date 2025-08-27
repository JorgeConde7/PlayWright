import { Page, Locator } from 'playwright';

export class CheckoutPage {
  readonly page: Page;
  readonly nombres: Locator;
  readonly apellidos: Locator;
  readonly codigoPostal: Locator;
  readonly btnContinuar: Locator;
  readonly btnFinish: Locator;
  readonly mensajeConfirmación: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nombres = page.locator('[data-test="firstName"]');
    this.apellidos = page.locator('[data-test="lastName"]');
    this.codigoPostal = page.locator('[data-test="postalCode"]');
    this.btnContinuar = page.locator('[data-test="continue"]');
    this.btnFinish = page.locator('[data-test="finish"]');
    this.mensajeConfirmación = page.locator('.complete-header');
  }

  async agregoDatosContacto(firstName: string, lastName: string, postalCode: string) {
    await this.nombres.fill(firstName);
    await this.apellidos.fill(lastName);
    await this.codigoPostal.fill(postalCode);
    await this.btnContinuar.click();
  }

  async clickCheckout() {
    await this.btnFinish.click();
    await this.page.waitForTimeout(3000);
  }

}
