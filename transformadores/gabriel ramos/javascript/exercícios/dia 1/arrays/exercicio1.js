/*
    Escreva um programa que, dado o array [1, 2, 3, 4, 5] deverá exibir: [2, 3, 4, 5, 6].

    >> Utilizando forEach;
    >> Utilizando map.
*/

const arr = [1, 2, 3, 4, 5];

const arrMap = arr.map(i => i + 1);
const arrForEach = [];

arr.forEach(i => arrForEach.push(i + 1));

console.log(arrMap);
console.log(arrForEach);