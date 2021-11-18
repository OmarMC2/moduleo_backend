const fs = require('fs/promises');
const encoding = 'utf8'
/*
async function crearArchivo(nombre, contenido) {
    try {
        await fs.writeFile(nombre, contenido, encoding);
        console.log('archivo creado')
    } catch (error) {
        console.error();
    }
  
}

async function borrar(nombre) {
    try {
     await   fs.unlink(nombre) 
        console.log('File deleted!');    
    } catch (error) {
        console.error()
    }
    
 

}


async function editar(archivo, contenido) {
       try {
        await fs.appendFile(archivo, contenido, encoding)
        console.log('Cambios Guardados')
       } catch (error) {
           console.error()
       }

}

async function leer(path) {
    try {
        await fs.readFile(path, encoding);
        console.log('archivoPrueba.txt')
    } catch (error) {
        console.error()
    }

}


async function ejecutoraDeCRUD() {
    await crearArchivo('archivoPrueba.txt', '// Clase de Promisses') 
    await leer('archivoPrueba.txt')
    await editar('archivoPrueba.txt', ' Nuevo ejercicio de hoy')
    await leer('archivoPrueba.txt')
    await borrar('archivoPrueba.txt')
}
ejecutoraDeCRUD()
*/
async function crearCarpeta(nombre, contenido) {
    try {
        await fs.mkdir(nombre, contenido,);
        console.log('carpeta creada')
    } catch (error) {
        console.error();
    }
  
}

async function eliminarCarpeta(nombre, contenido) {
    try {
        await fs.rmdir(nombre, contenido,);
        console.log('carpeta eliminada')
    } catch (error) {
        console.error();
    }
  
}


async function leerCarpeta(nombre, contenido) {
    try {
      let result = await fs.readdir(nombre, contenido,);
        console.log('carpeta leida')
        console.log(result)
    } catch (error) {
        console.error();
    }
  
}

async function ejecutorCarpetas(){
   await crearCarpeta('nueva carpeta')
   await leerCarpeta('nueva carpeta')
   await eliminarCarpeta('nueva carpeta')

}

ejecutorCarpetas()