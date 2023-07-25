function multiplos(){
    let soma = 0

    for (let indice = 0; indice < 1000; indice++) {
        if (indice % 5 === 0 || indice % 7 === 0) {
            soma += indice
        }
        
    } 

    return soma
}


console.log(multiplos())