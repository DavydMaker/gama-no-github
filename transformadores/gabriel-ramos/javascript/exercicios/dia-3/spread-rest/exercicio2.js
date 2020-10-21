/*
    Como aplicar Rest para receber qualquer quantidade de parâmetro na função abaixo?

    const funcao = (a, b) => {
        console.log(a);
        console.log(b);
    };

    funcao(1, 2, 3, 4, 5, 6)
*/

const funcao = (...valores) => valores.forEach(valor => console.log(valor));

funcao(1, 2, 3, 4, 5, 6);