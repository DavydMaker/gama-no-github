/*
    Utilizando somente if/else, escreva um programa que, à partir de uma string como [success] qualquer texto, tem o seguinte comportamento:

    >> Imprime no console tudo certo e o status for success ou warning;
    >> Imprime error no console, caso seja error;
    >> Imprime status inválido caso não seja nenhum dos status acima.
*/

const string = "[success] qualquer texto";

if (string.startsWith('[success]') || string.startsWith('[warning]')) {
    console.log('tudo certo');
} else if (string.startsWith('[error]')) {
    console.log('errow');
} else {
    console.log('status inválido');
}