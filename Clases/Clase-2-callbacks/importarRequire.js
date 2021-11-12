const fs = require ('fs');

fs.writeFile('hola.txt', 'Hola desde file sistem', 'utf8', (error) => {
   if (error){
       console.log('error:', error)
   }else{
    console.log('se creo el archivo correctamente')
   }
})

