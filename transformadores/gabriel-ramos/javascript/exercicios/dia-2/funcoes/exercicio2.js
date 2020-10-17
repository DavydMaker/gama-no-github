/*
    Refaça o exercício número 1 do tópico Arrays utilizando Arrow Functions.
*/

const arr = [1, 2, 3, 4, 5];

const arrMap = arr.map(i => i + 1);
const arrForEach = [];

arr.forEach(i => arrForEach.push(i + 1));

console.log(arrMap);
console.log(arrForEach);