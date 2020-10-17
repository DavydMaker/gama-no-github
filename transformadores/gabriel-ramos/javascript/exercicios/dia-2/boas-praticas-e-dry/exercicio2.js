/*
    Como podemos abstrair o seguinte código para aplicar DRY de forma coerente?

    const arr1 = [1, 2, 3, 4];
    const arr2 = [5, 6, 7, 8];
    const arr3 = [5, 6, 7, 8];

    const novoArr1 = arr1.map(function (valor) {
        return valor + 1;
    });

    const novoArr2 = arr2.map(function (valor) {
        return valor + 2;
    });

    const novoArr3 = arr3.map(function (valor) {
        return valor + 3;
    });

    console.log('Array inicial', arr1);
    console.log('Array novo', novoArr1);
    console.log('Array inicial', arr2);
    console.log('Array novo', novoArr2);
    console.log('Array inicial', arr3);
    console.log('Array novo', novoArr3);
*/

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [9, 10, 11, 12];

const novoArr = (arr, soma) => arr.map(a => a + soma);

const novoArr1 = novoArr(arr1, 1);
const novoArr2 = novoArr(arr2, 2);
const novoArr3 = novoArr(arr3, 3);

console.log('Array inicial', arr1);
console.log('Array novo', novoArr1);
console.log('Array inicial', arr2);
console.log('Array novo', novoArr2);
console.log('Array inicial', arr3);
console.log('Array novo', novoArr3);