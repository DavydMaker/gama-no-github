/*
    Escreva um programa que, dado o array [1, 2, 3, 4, 5] deverá retornar somente o número 3.
*/

let arr = [1, 2, 3, 4, 5];

const arrFiltrado = arr.find(i => i === 3);

console.log(arrFiltrado);