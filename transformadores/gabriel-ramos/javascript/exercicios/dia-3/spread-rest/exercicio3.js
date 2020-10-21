/*
    Como unir os dois objetos abaixo em um novo objeto, usando Spread?

    const usuario = {
        email: 'um@email.com.br',
        senha: 'senha-super-secreta'
    };

    const detalhes = {
        nome: 'Um nome',
        sobrenome: 'Qualquer',
        bio: 'Uma pessoa qualquer',
    };
*/

const usuario = {
    email: 'um@email.com.br',
    senha: 'senha-super-secreta'
};

const detalhes = {
    nome: 'Um nome',
    sobrenome: 'Qualquer',
    bio: 'Uma pessoa qualquer',
};

const novoObjeto = { ...usuario, ...detalhes };