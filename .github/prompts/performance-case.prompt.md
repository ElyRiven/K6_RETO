# Caso de Prueba a automatizar

## Contexto

Necesito que implementes una automatización de API. En la URL `https://fakestoreapi.com/auth/login`.

- **URL Base:** https://automationexercise.com
- **Contenido aceptado:** application/json

Se provee el siguiente CURL para crear los scripts:

```
curl -location --max-time 60 'https://fakestoreapi.com/auth/login'^
--header 'Content-Type:application/json'^
--data '{
  "username": "user",
  "password": "passwd"
}'
```

Los datos de entrada que se deben parametrizar desde un archivo .csv son:

- Datos inválidos (la API retorna código 401):
  user, passwd

- Datos válidos (la API retorna código 201):

donero, ewedon
kevinryan, kev02937@
johnd, m38rmF$
derek, jklg*_56
mor_2314, 83r5^_

El escenario de la prueba al menos debe alcanzar los 20 TPF y debe tener las siguientes validaciones:

- El tiempo de respuesta permitido es de máximo 1.5 segundos
- Tasa de error aceptable, menor al 3% del total de peticiones.

## Tareas

Debes generar un script de automatización que cumpla con los criterios establecidos y usar los datos desde el archivo `.csv` para realizar el script.

Establece a tu criterio las opciones que se deben establecer para lograr que la automatización siga los criterios definidos.

## Objetivo

Debes crear la automatización de pruebas de rendimiento de los endpoints especificados, generando los archivos necesarios en sus correspondientes directorios y los scripts de ejecución.
Actualiza los scripts del archivo `package.json` para poder ejecutar la prueba.
Finalmente debes asegurar que el proyecto permita la ejecución correcta de la prueba y la generación del reporte HTML de la extensión de reportería xk6 con los resultados de rendimiento y sus metricas correspondientes.
