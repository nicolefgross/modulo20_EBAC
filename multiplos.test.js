const acharMultiplosDe5e7 = require('./multiplos')

test('Deve mostrar a soma dos múltiplos de 5 ou 7 abaixo de 1000', () => {
    const multiplos = acharMultiplosDe5e7()
    expect(multiplos).toEqual(156361)
});