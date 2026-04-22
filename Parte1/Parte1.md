# Cambios realizados al código

## Cambio 1: Corrección de sintaxis

El código no cerraba correctamente los bloques de:

* `createServer`
* `server.listen`

Esto provocaba un error de sintaxis que impedía ejecutar el código.

Se solucionó agregando los `});` faltantes.

**Nota extra:**
Se cambió el puerto de `3000` a `3001`, ya que el puerto 3000 estaba en uso.

---

## Cambio 2: Configuración de módulos (package.json)

Como se estaba utilizando `import`, es necesario que Node.js esté configurado para trabajar con módulos ES.

Se creó el archivo `package.json` usando:

```bash
npm init -y
```

Luego se agregó:

```json
"type": "module"
```

Esto permite usar `import`. De lo contrario, se tendría que usar `require`.

También se corrigió el script de inicio.

Antes:

```json
"test": "echo \"Error: no test specified\" && exit 1"
```

Después:

```json
"scripts": {
  "start": "node servidor-malo.js"
}
```

---

## Cambio 3: Corrección de la ruta `/info`

Inicialmente, la ruta `/info` utilizaba un `Content-Type` incorrecto:

```js
res.writeHead(200, { "Content-Type": "application-json" })
```

Esto provocaba que el navegador interpretara mal la respuesta, mostrando texto como:

```
Ruta de informaciÃ³n
```

Se corrigió a:

```js
res.writeHead(200, { "Content-Type": "text/plain" })
```

Ya que la respuesta es texto simple y no un objeto JSON.

---

## Cambio 4: Error en la ruta `/api/student`

Al acceder a esta ruta, el servidor mostraba el siguiente error:

```bash
Error: ENOENT: no such file or directory
```

Esto ocurría porque el archivo `datos.json` no existía en el directorio del proyecto.

Para solucionarlo, se creó el archivo `datos.json` con contenido de prueba:

```json
{
  "nombre": "Marcela",
  "carnet": 24952
}
```

---

## Cambio 5: Lectura correcta del archivo

Después de crear el archivo, ya no aparecía el error, pero no se mostraban correctamente los datos.

El método `fs.readFile` de `fs/promises` devuelve una promesa, por lo que es necesario usar `await`.

Inicialmente no se utilizaba `await`, por lo que no se obtenía el contenido real del archivo.

Se corrigió utilizando:

```js
const texto = await fs.readFile(filePath, "utf-8")
```

Esto permitió obtener el contenido del archivo, aunque inicialmente se veía así:

```text
"{\r\n  \"nombre\": \"Marcela\",\r\n  \"carnet\": 24952\r\n}"
```

---

## Cambio 6: Corrección en el envío de la respuesta JSON

El problema anterior se debía a que se estaba utilizando:

```js
res.end(JSON.stringify(texto))
```

Sin embargo, `texto` ya es un string, por lo que esto generaba un JSON mal formado (doble conversión).

Se corrigió enviando directamente:

```js
res.end(texto)
```

Esto permite que el navegador interprete correctamente la respuesta como JSON:

```json
{
  "nombre": "Marcela",
  "carnet": 24952
}
```

---

## Cambio 7: Manejo de errores con try/catch

El servidor se detenía si ocurría un error al leer el archivo.

Se implementó un bloque `try/catch` para manejar errores de forma controlada

Esto evita que el servidor se caiga y permite responder adecuadamente si no existiera el archivo.

**Nota:**
También se podría usar `.then().catch()`, pero `async/await` es más claro y legible.


