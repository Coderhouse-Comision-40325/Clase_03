const escribirArchivo = require('./archivo.js')

console.log('Inicio del programa')

escribirArchivo('Hola mundo', () => {
    console.log('termine de escribir el archivo')
})

console.log('Fin del programa')