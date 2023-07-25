const numeros = [5, 9, 2, 1, 6]

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

console.log('Maior indice é: ', maiorIndice)
console.log('Menor indice é: ', menorIndice)
