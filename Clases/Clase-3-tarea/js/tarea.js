const fs = require('fs');
const path = require('path/posix');

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, 'utf8', (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('Se creo el archivo correctamente');
        }
    });
}

function borrar(nombre, err) {
    fs.unlink(nombre, function (err) {
        if (err) throw err;
        console.log('File deleted!');
      }); 

}

function editar(archivo, contenido, err) {
    fs.appendFile(archivo, contenido, 'utf8', function (err) {
        if (err) throw err;
        console.log('Guardado.');
    } )
}

function leer(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
}


// crearArchivo('ejercicio.txt', 'Este será su ejercicio de mañana')

// editar("nuevoEjercicio.txt", "Nuevo ejercicio de hoy")

// borrar("ejercicio.txt")

 leer("nuevoEjercicio.txt")
