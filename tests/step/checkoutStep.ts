import { Given, When, Then } from "@cucumber/cucumber"
import { expect } from '@playwright/test';

import { CustomWorld } from "../helpers/world";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CarritoPage } from "../pages/carritoPage";

let checkoutPage: CheckoutPage;
let carritoPage: CarritoPage;

When('hago click en el boton Checkout', async function (this: CustomWorld) {
    carritoPage = new CarritoPage(this.page);
    await carritoPage.checkout();
});
When('completa mis datos {string}, {string}, {string}', async function (this: CustomWorld,nombres :string, apellidos:string, codigoPostal:string) {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.agregoDatosContacto(nombres, apellidos, codigoPostal);

});

When('hago click en el boton finish', async function (this: CustomWorld) {
    await checkoutPage.clickCheckout();
});
Then('valido mensaje de confirmación {string}', async function (mensaje) {
    await expect(checkoutPage.mensajeConfirmación).toContainText(mensaje);
});