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


