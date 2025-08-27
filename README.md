# PlayWright
Automatización de pruebas para Front SOAINT

📂 Estructura del Proyecto

pages/ → Contiene las clases de Page Object Model (POM).
feature/ → Escenarios de prueba en formato Gherkin.
step/ → los pasos del gherkin
helpers/ → Archivos de configuracion para ejecucion de cucumber con playwright
README.md → Instrucciones del proyecto.

🚀 Requisitos

Antes de ejecutar los tests, asegúrate de tener instalado:
- Node.js
 (v18 o superior recomendado)


📥 Instalación

Clona el repositorio e instala dependencias:

- git clone https://github.com/JorgeConde7/PlayWright.git
- npm install
- Instala los navegadores de Playwright:
- npx playwright install

▶️ Ejecución de Pruebas

- Para ejecutar todos los tests:
    npx playwright test

- Ejecutar un caso en especifico por Tag
    npx cucumber-js --tags "@Checkout" --config cucumber.json

🧩 Patrones Utilizados

- Page Object Model (POM): Separación de lógica de UI en clases reutilizables.
- BDD con Gherkin: Escenarios claros para QA, negocio y devs.
