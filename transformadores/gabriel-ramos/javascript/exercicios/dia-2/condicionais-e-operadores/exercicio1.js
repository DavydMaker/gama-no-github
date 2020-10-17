/*
    Dado o array [1, 2, 3, 4, 5, 6], escreva um programa que retorna um novo array, contendo somente os valores pares, nesse caso, deverá retornar [2, 4, 6]. Dica: operador de módulo % pode ajudar nessa tarefa.
*/

const arr = [1, 2, 3, 4, 5, 6];

const arrPares = arr.filter(i => i % 2 === 0);

console.log(arrPares);