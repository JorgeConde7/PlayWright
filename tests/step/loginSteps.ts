import { Given, When, Then } from "@cucumber/cucumber"
import { expect } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { CustomWorld } from "../helpers/world";


let loginPage: LoginPage;

Given('que el usuario navega a la página de Sauce Demoa', async function (this:CustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When('ingresa credenciales {string} y {string}', async function (this:CustomWorld,username, password) {
  await loginPage.login(username, password);
});

Then('debería ver la página de productos', async function (this:CustomWorld) {
  await expect(this.page.locator('.title')).toHaveText('Products');
});

Then('valido el mensaje de error {string}', async function (mensaje) {
           await expect(loginPage.errorMessage).toContainText(mensaje);

         });