function acharIndices(numeros) {
    let maiorIndice = 0
    let menorIndice = 0

    for (let indice = 0; indice < numeros.length; indice++) {   

        if (numeros[indice] > numeros[maiorIndice]) {
            maiorIndice = indice
        }
    
        if (numeros[indice] < numeros[menorIndice]) {
            menorIndice = indice
        }
    } 

    return {
        maiorIndice, menorIndice
    }
}

module.exports = acharIndices;

