import { Given, Then, When } from "@cucumber/cucumber";
import { ProductoPage } from "../pages/ProductoPage";
import { CarritoPage } from "../pages/carritoPage";
import { CustomWorld } from "../helpers/world";
import { expect } from "@playwright/test";

let productoPage: ProductoPage;
let carritoPage: CarritoPage;

When('agrega el producto {string} al carrito', async function (this: CustomWorld, productName: string) {
    productoPage = new ProductoPage(this.page);
    await productoPage.agregarProducto(productName);
    await productoPage.clickCarrito();
    
});

Then('debería ver el producto en el carrito', async function (this: CustomWorld) {
    carritoPage = new CarritoPage(this.page);
    const isVisible = await carritoPage.hasProduct("Sauce Labs Backpack");
    expect(isVisible).toBeTruthy();
});
