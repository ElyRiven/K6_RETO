# K6 - Pruebas de Rendimiento: Fake Store API Login

## Descripción

Proyecto de automatización de pruebas de rendimiento sobre el endpoint de autenticación de la [Fake Store API](https://fakestoreapi.com). Evalúa el comportamiento del endpoint `POST /auth/login` bajo carga con múltiples usuarios virtuales, midiendo tiempos de respuesta y tasa de error según umbrales definidos.

---

## Stack Tecnológico

| Tecnología    | Versión |
| ------------- | ------- |
| Node.js       | v24     |
| K6            | v1.6.1  |
| xk6-dashboard | v0.8.1  |

---

## Estructura del Proyecto

```
K6_RETO/
├── data/
│   └── login-data.csv          # Credenciales de usuarios parametrizadas para el login
├── results/
│   └── login-load-report.html  # Reporte HTML generado por xk6-dashboard tras la ejecución
├── src/
│   ├── config/
│   │   └── login-config.js     # Configuración de la prueba: etapas de carga, VUs y umbrales
│   ├── services/
│   │   └── login-service.js    # Función que realiza la llamada HTTP POST al endpoint de login
│   ├── tests/
│   │   └── login-load.js       # Script principal de K6: opciones, lectura de CSV y checks
│   └── utils/
│       └── endpoints.js        # Constantes de URL base y rutas de los endpoints
├── API_DOCUMENTATION.md        # Documentación técnica del endpoint probado
└── package.json                # Definición del proyecto y scripts de ejecución
```

---

## Ejecución del Proyecto

### 1. Requisitos previos

Instalar K6 con el plugin **xk6-dashboard**. Se requiere tener Go instalado:

```bash
go install go.k6.io/xk6/cmd/xk6@latest
xk6 build --with github.com/grafana/xk6-dashboard@v0.8.1
```

O bien instalar el binario precompilado disponible en el [repositorio de xk6-dashboard](https://github.com/grafana/xk6-dashboard/releases).

Verificar la instalación:

```bash
k6 version
```

### 2. Ejecutar la prueba de carga

```bash
npm run test:load:login
```

Este comando ejecuta la prueba de carga sobre el endpoint `POST /auth/login` con las siguientes etapas:

| Etapa           | Duración | VUs objetivo |
| --------------- | -------- | ------------ |
| Rampa de subida | 10s      | 40           |
| Carga sostenida | 40s      | 40           |
| Rampa de bajada | 10s      | 0            |

### 3. Umbrales evaluados

| Métrica                   | Umbral    |
| ------------------------- | --------- |
| `http_req_duration` p(95) | < 1500 ms |
| `http_req_failed`         | < 3%      |

### 4. Reporte HTML

Al finalizar la ejecución, el reporte se genera automáticamente en:

```
results/login-load-report.html
```

Abrir el archivo en cualquier navegador para visualizar las métricas de rendimiento en tiempo real (gráficas, percentiles, tasa de errores, throughput, etc.).
