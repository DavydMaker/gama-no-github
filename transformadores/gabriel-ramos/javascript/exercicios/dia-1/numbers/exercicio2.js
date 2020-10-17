/*
    Escreva um script que utiliza a string 123.456 e exibe:

    >> Seu número sem as casas decimais;
    >> Seu número com as casas decimais.
*/

const string = "123.456";

console.log(Number(string).toFixed());
console.log(Number(string).toFixed(2));