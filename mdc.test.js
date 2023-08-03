const acharMdc = require("./mdc")

test('Deve mostrar o MDC de dois números', () => {
    const mdc = acharMdc(24, 9)
    expect(mdc).toEqual(3)
});

test('Deve mostrar o MDC de dois números - cenário 2', () => {
    const mdc = acharMdc(35, 15)
    expect(mdc).toEqual(5)
});