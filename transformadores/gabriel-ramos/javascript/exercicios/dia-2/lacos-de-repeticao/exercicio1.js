/*
    Escreva um script que lista todos os dados do array ['Lora', 'Logan', 'LeBeau'].

    Utilizando while;
    Utilizando for.
*/

const nomes = ['Lora', 'Logan', 'LeBeau'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

let i = 0;
while (i < nomes.length) {
    console.log(nomes[i++]);
}