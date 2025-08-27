@AgregarProductoCarrito
Feature: Carrito de compras en Sauce Demo

  Scenario Outline: Agregar un producto al carrito
  Given que el usuario navega a la página de Sauce Demoa
    When ingresa credenciales "standard_user" y "secret_sauce"
    And agrega el producto "<nombreProducto>" al carrito
    Then debería ver el producto en el carrito 

    Examples:
    |nombreProducto|
    |Sauce Labs Backpack|
