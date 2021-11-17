const fs = require ('fs/promises');
const encoding = 'utf8'

async function crearArchivo(nombre, contenido) {
    try {
        await fs.writeFile(nombre, contenido, encoding);
        console.log('archivo creado')
    } catch (error) {
        console.error();
    }
  
}
 // crearArchivo('otroArchivoPrueba.txt', '//ClaseAsync')

 async function borrar(nombre, err) {
    try {
       await fs.unlink(nombre, err)
        console.log('File deleted!'); 
    } catch (error) {
        console.error()
    } 

}
borrar('otroArchivoPrueba.txt')
