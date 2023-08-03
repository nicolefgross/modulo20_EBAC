function acharMdc(numero1, numero2) {
    let resto
    do {
        resto = numero1 % numero2
        numero1 = numero2
        numero2 = resto
    } while (resto !== 0)
    return numero1
}

module.exports = acharMdc;