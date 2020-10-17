/*
    Dado o array ['Lora', 'Logan', 'LeBeau', 'Outro'] escreva um programa que retorna um array com todos os nomes que iniciam com L.
*/

const nomes = ['Lora', 'Logan', 'LeBeau', 'Outro'];

const nomesIniciandoL = nomes.filter(nome => nome.startsWith('L'));

console.log(nomesIniciandoL);