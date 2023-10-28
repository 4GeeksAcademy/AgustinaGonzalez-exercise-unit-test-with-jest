// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromYenToPound, } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("Un euro es 1.07 dolares", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(1)).toBe(1.07); 
})

test("Un dolar debe ser 146.26 yen ", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBe(146.26);
})

test("Un yen debe ser  0,87 libras ", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1)).toBe(0.01);
})