/*
    Escreva um programa que exibe uma mensagem iniciando contagem e começa um contador de tempo. Após isso, esse programa deverá rodar um laço de repetição qualquer indo de 0 até 100 e depois finalizar a contagem, exibindo o tempo total do contador criado.
*/

console.time("contador");

for (let i = 0; i < 100; i++) {
    console.log("executando");
}

console.timeEnd("contador");