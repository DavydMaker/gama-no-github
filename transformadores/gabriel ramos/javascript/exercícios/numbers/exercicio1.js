/*
    Complete o script abaixo. Ele deve exibir o valor final em Reais, considerando somente 2 casas decimais.

    const valor = 123.456;

    console.log(); // Deverá exibir R$123,45
*/

const valor = 123.456;

console.log('R$ ' + valor.toFixed(2).replace('.', ',')); // Deverá exibir R$123,45