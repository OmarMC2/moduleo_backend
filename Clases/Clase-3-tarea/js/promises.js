// Clase de Promisses

/*
const promesa = new Promise ((resolve, reject) => {
    if (succes)
    resolve(valor);
    else
    reject('error')
})
*/
// then es un metodo del object Promise que indica que algo sucedera cuando el evento que indiques suceda, recibe lo que se manda en el resolve

// catch se ejecuta cuando la promeza se rechaza, recibe lo que se manda en la function reject.

    function construirMuro (muro) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                
                muro.construido =   true;
                
                const error = muro.construido ? null : Error('No se pudo construir');
            
            
            if (error)
                reject (error);
            else
            resolve(muro);    
            
            }, 1000);
        })
    }

    function aplanarMuro (muroConstruido) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                
                muro.aplanado =   true;
                
                const error = muro.construido && muro.aplanado ? null : Error('No se pudo aplanar');
            
            
            if (error)
                reject (error);
            else
            resolve(muro);    
            
            }, 1000);
        })
    }
    function pintarMuro (muro) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                
                muro.pintado =   true;
                
                const error = muro.construido && muro.aplanado && muro.pintado ? null : Error('No se pudo aplanar');
            
            
            if (error)
                reject (error);
            else
            resolve(muro);    
            
            }, 1000);
        })
    }

const muro = {};    

const promesa = construirMuro(muro)

promesa
.then((muroConstruido) =>{
    console.log('Muro construido:', muroConstruido);
    aplanarMuro(muroConstruido)
        .then ((muroAplanado) => {
            console.log('ya se aplano:', muroAplanado);
            pintarMuro(muroAplanado)
            .then ((muroPintado) => {
                console.log('ya se pinto:', muroPintado)
            })
            .catch ((error) => {
                console.log(error)
                throw error;
            })
        })
        .catch((error) => {
            console.log('error')
        })
})
.catch((error) => {
    console.log('error')
});
