@Checkout
Feature: Proceso de compra en Sauce Demo

  Scenario Outline: Completar compra exitosa
    Given que el usuario navega a la página de Sauce Demoa
    When ingresa credenciales "standard_user" y "secret_sauce"
    And agrega el producto "<nombreProducto>" al carrito
    And hago click en el boton Checkout 
    And completa mis datos "<nombres>", "<apellidos>", "<codigoPostal>"
    And hago click en el boton finish
    Then valido mensaje de confirmación "Thank you for your order"

Examples:
    |nombreProducto| nombres | apellidos | codigoPotal|
    |Sauce Labs Backpack| jorge |  conde | l21 |
