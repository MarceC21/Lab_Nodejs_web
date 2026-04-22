
# Laboratorio Node.js

## Descripción

Este laboratorio tiene como objetivo unificar los conocimientos adquiridos en clases sobre Node.js.

---

## Estructura del proyecto

```bash
Parte1/
│
├── Parte1.md
├── datos.json
├── package.json
└── servidor-malo.js

Parte2/
│
├── package.json
├── server-bueno.js
└── README.md
```

---

## Parte 1: Corrección del servidor

En esta fase se trabajó con un archivo llamado `servidor-malo.js`, el cual contenía múltiples errores

### Actividades realizadas:

* Ejecutar el servidor
* Identificar errores en el código
* Corregir problemas de:

  * Sintaxis
  * Rutas
  * Manejo de archivos
  * Headers HTTP
* Validar funcionamiento desde el navegador

Todos los cambios realizados se documentaron en:

```bash
Parte1/Parte1.md
```

---

## Parte 2: Mejora del servidor

Una vez funcional el servidor, se implementaron nuevas rutas y mejoras

### Funcionalidades agregadas:

#### `/info`

* Responde con un JSON que contiene:

  * Mensaje
  * Curso
  * Tecnología

#### `/saludo`

* Responde con texto plano personalizado

#### `/api/status`

* Devuelve un JSON con:

  * `ok`
  * `status`
  * `puerto`

#### `/api/student`

* Lee información desde `datos.json`
* Maneja errores con `try/catch`

#### Manejo de errores 404

* Muestra la ruta que el usuario intentó visitar

Ejemplo:

```bash
Ruta no encontrada: /ruta-inexistente
```

---

## Cómo ejecutar el proyecto

### Inicializar el proyecto 
Desde la carpeta correspondiente:

```bash
npm init -y
```

### 2. Ejecutar el servidor

Desde la carpeta correspondiente:

```bash
node servidor-malo.js
```

o en la Parte 2:

```bash
node server-bueno.js
```

---

## Rutas disponibles

```bash
/                  -> Servidor activo
/info              -> Información en JSON
/saludo            -> Mensaje personalizado
/api/status        -> Estado del servidor
/api/student       -> Datos desde archivo JSON
```
