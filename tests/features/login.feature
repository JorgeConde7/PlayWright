@Login
Feature: Login de usuarios en Sauce Demo

    
  Scenario: Login exitoso con usuario estándar
    Given que el usuario navega a la página de Sauce Demoa
    When ingresa credenciales "standard_user" y "secret_sauce"
    Then debería ver la página de productos

  Scenario: Login fallido con usuario bloqueado
    Given que el usuario navega a la página de Sauce Demoa
    When ingresa credenciales "locked_out_user" y "secret_sauce"
    Then debería ver un mensaje de error
