# Cambios realizados al código

## Cambio 1: Corrección de sintaxis

El código no cerraba correctamente los bloques de:

- createServer
- server.listen

Esto provocaba un error de sintaxis que impedía ejecutar el còdigo

Se solucionó agregando los }); faltantes.

***NOTA EXTRA:*** Adicionalmente, se cambió el puerto de 3000 a 3001, ya que el puerto 3000 lo tenia en uso.

## Cambio 2: Configuración de módulos (package.json)

Como se estaba usando import, este requiere que Node.js esté configurado para trabajar con módulos ES.

Entonces se creó el archivo package.json usando:


```bash
npm init -y
```

Luego se agregó:

```json
"type": "module"
```

Esto permite usar import, si no se tendría que usar require

También se corrigió el script de inicio:

Se cambio de esto

```json
"test": "echo \"Error: no test specified\" && exit 1"
```
A esto: 

```json
"scripts": {
  "start": "node servidor-malo.js"
}
```


## Cambio 3: Corrección de la ruta /info

Inicialmente, la ruta /info utilizaba un "Content-Type": "application-json", lo cuàl estarìa incorrecto

Ya que el navegador interpretara mal la respuesta.

Y se miraba asi: Ruta de informaciÃ³n

Entonces se corrigió a:

res.writeHead(200, { "Content-Type": "text/plain" })

Ya que la respuesta es texto simple y no un objeto JSON

## Cambio 3: Corrección de la ruta /info

Inicialmente, la ruta /info utilizaba un "Content-Type": "application-json", lo cuàl estarìa incorrecto

Ya que el navegador interpretara mal la respuesta.

Y se miraba asi: Ruta de informaciÃ³n

Entonces se corrigió a:

res.writeHead(200, { "Content-Type": "text/plain" })

Ya que la respuesta es texto simple y no un objeto JSON


## Cambio 4: Error en la ruta /api/student

Al acceder a esta ruta, el servidor mostraba el siguiente error:

Error: ENOENT: no such file or directory

Esto ocurría porque el archivo datos.json no existía en el directorio del proyecto.

Para solucionarlo, se creó el archivo datos.json con contenido de prueba:

{
  "nombre": "Marcela",
  "carnet": 24952
}


## Cambio 5: Lectura correcta del archivo
Con el cambio anterior ya no mostraba el error pero no se miraban los datos

Aqui habia que prestar más atención ya que el método fs.readFile proveniente de fs/promises devuelve una promesa. Entonces NECESITA un await

Inicialmente no se utilizaba await, por lo que no se obtenía el contenido real del archivo

Se corrigió utilizando:

const texto = await fs.readFile(filePath, "utf-8")

Y ya se obtuvo:










