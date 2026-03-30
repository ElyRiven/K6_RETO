# Conclusiones y Hallazgos

En el presente proyecto de automatización de pruebas de rendimiento en la URL `https://fakestoreapi.com/auth/login` se evidencian los siguientes hallazgos y conclusiones:

## Hallazgos técnicos

- La prueba de rendimiento garantizó una carga constante de al menos 20 TPS durante la ejecución.
- El reporte de la prueba evidencia que el 95% de las peticiones duraron 429 milisegundos en completarse.
- El reporte evidencia que el tiempo máximo que tardaron las peticiones en completarse fue de 8 segundos.
- Mediante pruebas manuales, se verificó que las credenciales `user` y `passwd` son inválidas, por lo tanto, las peticiones hechas con esta información se consideraron fallidas.
- El reporte evidencia un porcentaje de 14.8% de peticiones fallidas, lo cual sobrepasa el umbral de 3% de tasa de error aceptable del total de peticiones.

## Conclusiones

- La prueba de rendimiento creó un ambiente de carga constante sobre el endpoint objetivo correctamente y con los lineamientos establecidos.
- Se hizo uso de credenciales inválidas para la prueba, lo que aumentó considerablemente el porcentaje de peticiones fallidas de la prueba.
- Se evidenció que con el uso de credenciales válidas, el porcentaje de peticiones fallidas es 0%.
- El tiempo de respuesta de las peticiones en ocasiones llega a los 8 segundos, por lo que el tiempo de respuesta del sistema se considera inestable.
