/*
    Adapte o exercício 1 do tópico Funções para utilizar template strings ao invés de concatenar as variáveis nas strings.
*/

const frase = (nome, idade) => `Nome de usuário ${nome}. Idade ${idade}.`

console.log(frase('Davyd', 19));