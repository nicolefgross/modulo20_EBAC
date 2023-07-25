function mdc(numero1, numero2) {
    let resto
    do {
        resto = numero1 % numero2
        numero1 = numero2
        numero2 = resto
    } while (resto !== 0)
    return numero1
}

console.log(mdc(24, 9))