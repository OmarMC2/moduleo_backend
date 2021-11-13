const fs = require('fs');
const path = require('path/posix');
const encoding = 'utf8'

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, encoding, (error) => {
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
    fs.appendFile(archivo, contenido, encoding, function (err) {
        if (err) throw err;
        console.log('Guardado.');
    } )
}

function leer(path) {
    fs.readFile(path, encoding, (err, data) => { // el encoding es necesario para que la computadora interprete  y nos muestre los datos del archivo como queremos leerlos
        if (err) throw err;
        console.log(data);
      });
}


// crearArchivo('ejercicio.txt', 'Este será su ejercicio de mañana')

// editar("nuevoEjercicio.txt", "Nuevo ejercicio de hoy")

// borrar("ejercicio.txt")

 leer("nuevoEjercicio.txt")
