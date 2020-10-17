/*
    Dado o array [1, 2, 3, 4, 5], escreva um programa que retorna um novo array, contendo o primeiro e o último item
*/

const arr = [1, 2, 3, 4, 5];
const novoArr = [
    arr[0],
    arr[arr.length - 1]
];

console.log(novoArr);