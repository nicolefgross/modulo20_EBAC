function acharMultiplosDe5e7(){
    let soma = 0

    for (let indice = 0; indice < 1000; indice++) {
        if (indice % 5 === 0 || indice % 7 === 0) {
            soma += indice
        }
        
    } 

    return soma
}


module.exports = acharMultiplosDe5e7;