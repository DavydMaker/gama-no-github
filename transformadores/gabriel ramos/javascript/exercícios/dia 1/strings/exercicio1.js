/*
    Desenvolva um script que armazene duas variáveis: nome e idade. Após armazenar essas variáveis o script deverá mostrar a mensagem Nome de usuário {nome}. Idade {idade}.. Você deve armazenar a Nome de usuário {nome}. e Idade {idade}. em duas variáveis diferentes e juntá-las somente na hora de exibir.

    const nome = 'Gabriel';
    const idade = 24;

    const mensagemNome = 'Nome de usuário {nome}.';
    const mensagemIdade = 'Idade {idade}.';

    const mensagemNomeFormatada = mensagemNome.replace('{nome}', nome);
    const mensagemIdadeFormatada = mensagemIdade.replace('{idade}', idade);

    const mensagemFinal = mensagemNomeFormatada + ' ' + mensagemIdadeFormatada;

    console.log(mensagemFinal);
*/

const nome = "Davyd";
const idade = 19;

console.log(`Nome de usuário ${nome}. Idade ${idade}.`);