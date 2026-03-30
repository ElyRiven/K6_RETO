# Caso de Prueba a automatizar

## Contexto

Necesito que implementes una automatización de API. En la URL `https://automationexercise.com/api_list` puedes encontrar la lista de endpoints disponibles y su documentación (estructura de datos recibida, códigos de respuesta, etc).

- **URL Base:** https://automationexercise.com
- **Contenido aceptado:** application/x-www-form-urlencoded

## Alcance

La automatización debe evaluar los siguientes endpoints:

- Creación de un nuevo usuario en el sistema (POST)
  **URL:** /api/createAccount
  Debes revisar la documentación de este endpoint para definir la estructura de datos que recibe.

- Consulta de usuario mediante email (GET)
  **URL:** /api/getUserDetailByEmail
  Revisa la documentación del endpoint para definir el parámetro a enviar en la URL

- Consulta del listado de Productos disponibles (GET)
  **URL:** /api/productsList
  Revisa la documentación del endpoint para definir si debes enviar algún parámetro para recibir una respuesta exitosa.

## Tareas

Debes generar un script de automatización por cada endpoint y por cada tipo de prueba con las siguientes opciones:

- Smoke Test
  Definir 15 VUsers y 1 minuto de duración para esta prueba.

- Load Test
  Subida gradual hasta 50 VUsers en 1:30 minutos y mantener por 3 minutos la carga. Eliminar el total de la carga en 1 minuto.

- Stress Test
  Subida agresiva de hasta 200 VUsers en 3 minutos para encontrar el punto de ruptura.

- Implementa la generación de datos dinámicos para los endpoints y evitar colisiones de emails.

- Verifica que el status de todas las peticiones a los endpoints devuelvan un estado 200.

## Métricas y Umbrales

- El percentil 95 de todos los endpoints en la métrica `http_req_duration` debe ser inferior a 500ms.
- La tasa de error de todos los endpoints en la métrica `http_req_failed` debe ser inferior al 1%.

## Datos de prueba

## Objetivo

Debes crear la automatización de pruebas de rendimiento de los endpoints especificados, generando los archivos necesarios en sus correspondientes directorios y los scripts de ejecución.
Actualiza los scripts del archivo `package.json` para poder ejecutar cada prueba individualmente y que genere reportes individuales por cada endpoint y por cada tipo de prueba.
Finalmente debes asegurar que el proyecto permita la ejecución correcta de las pruebas y la generación del reporte HTML de la extensión de reportería xk6 con los resultados de rendimiento y sus metricas correspondientes.
