# Cambios realizados al código

## Cambio 1: Corrección de sintaxis

El código no cerraba correctamente los bloques de:

- createServer
- server.listen

Esto provocaba un error de sintaxis que impedía ejecutar el còdigo

Se solucionó agregando los }); faltantes.

***NOTA EXTRA:*** Adicionalmente, se cambió el puerto de 3000 a 3001, ya que el puerto 3000 lo tenia en uso.

##

