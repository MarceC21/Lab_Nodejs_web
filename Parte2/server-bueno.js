
import http from "http"
import fs from "fs/promises"
import path from "path"


const PORT = 3001

// Crear el servidor HTTP
const server = http.createServer(async (req, res) => {

  // Ruta raíz  
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Servidor activo")
    return
  }

  // Ruta de información
  if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "application/json" })
    const info = {
        mensaje: "La info del servidor/lab",
        curso: "Sistemas y tecologías web",
        tecnologia: "JavaScript y Node.js"
    }
    res.end(JSON.stringify(info)) //Ahora si se usa para pasar de JS a JSON
    return
}

  //Ruta para saludo
  if (req.url === "/saludo") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Hola auxiliar. Suerte calificando el lab :D")
    return
  }

  //Ruta de Status
  if (req.url === "/api/status") {
    res.writeHead(200, { "Content-Type": "application/json" })
    const status = {
        ok: true, //supongo que asi se pone
        Status: "Servidor funcionando correctamente",
        Puerto: PORT
    }
    res.end(JSON.stringify(status)) //Ahora si se usa para pasar de JS a JSON
    return
  }


  // Ruta de estudiantes
  //Tiene Try Catch para manejar errores al leer el archivo
  
  if (req.url === "/api/student") {
    try {
      const filePath = path.join(process.cwd(), "datos.json")
      const texto = await fs.readFile(filePath, "utf-8") //Se puso await para esperar a que se lea el archivo antes de continuar
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(texto) // //Se cambio a texto para enviar el contenido del archivo como respuesta
    } catch (error) {
      res.writeHead(404, { "Content-Type": "text/plain" })
      res.end("Error, archivo no encontrado")
    }
    return
  }


  // Esto es para cualquier ruta no encontrada
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end(`Ruta no encontrada: ${req.url}`)
    
}); // Se debe cerrar el bloque de código del createServer


server.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3001")
}); // Se debe cerrar el bloque de código del listen

