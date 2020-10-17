/*
    Escreva um programa que, dado o array [1, 2, 3, 4, 5] deverá retornar a soma dos itens desse array, totalizando 15.

    >> Utilizando forEach;
    >> Utilizando reduce.
*/

const arr = [1, 2, 3, 4, 5];

let somaForEach = 0;
arr.forEach((i) => somaForEach += i);

const somaReduce = arr.reduce((total, atual) => total + atual);

console.log(somaReduce);