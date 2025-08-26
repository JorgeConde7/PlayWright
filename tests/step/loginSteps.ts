import { Given, When, Then } from "@cucumber/cucumber"
import { expect } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';

let loginPage: LoginPage;

Given('que el usuario navega a la página de Sauce Demoa', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When('ingresa credenciales {string} y {string}', async function (username, password) {
  await loginPage.login(username, password);
});

Then('debería ver la página de productos', async function () {
  await expect(this.page.locator('.title')).toHaveText('Products');
});

Then('debería ver un mensaje de error', async function () {
          await expect(loginPage.errorMessage).toBeVisible();
});