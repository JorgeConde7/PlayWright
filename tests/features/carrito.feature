Feature: Carrito de compras en Sauce Demo

  Scenario: Agregar un producto al carrito
    Given que el usuario inicia sesión como "standard_user"
    When agrega el producto "Sauce Labs Backpack" al carrito
    Then debería ver el producto en el carrito
