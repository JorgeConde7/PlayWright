Feature: Proceso de compra en Sauce Demo

  Scenario: Completar compra exitosa
    Given que el usuario inicia sesión como "standard_user"
    And tiene el producto "Sauce Labs Backpack" en el carrito
    When completa el proceso de compra
    Then debería ver la confirmación "THANK YOU FOR YOUR ORDER"
