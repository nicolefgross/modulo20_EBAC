const acharIndices = require("./indice")

test('deve mostrar o número com maior indice e o número com menor indice', () => {
    const indices = acharIndices([10, 5, 15, 20])
    expect(indices.menorIndice).toEqual(1)
    expect(indices.maiorIndice).toEqual(3)
});

test('deve mostrar o número com maior indice e o número com menor indice - cenário 2', () => {
    const indices = acharIndices([90, 105, 10, 78])
    expect(indices.menorIndice).toEqual(2)
    expect(indices.maiorIndice).toEqual(1)
})


