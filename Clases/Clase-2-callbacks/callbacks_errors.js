
function construir(muro) {
    console.log('contruyendo...')
    setTimeout(()=> {
        muro.construido = true; //Se ejecuta cuando pasen 500 milisegundos
    }, 500)
    return muro
}

function aplanar(muro) {
    console.log('aplanando...')
    setTimeout(()=> {
        muro.construido = true; //Se ejecuta cuando pasen 500 milisegundos
    }, 200)
    return muro
}

function pintar(muro) {
    console.log('pintando...')
    setTimeout(()=> {
        muro.construido = true; //Se ejecuta cuando pasen 500 milisegundos
    }, 100)
    return muro
}

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
};

