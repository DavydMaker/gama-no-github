/*
    Ajuste o código abaixo para utilizar ternário:

    let status = 'success';

    let message = '';

    if (status === 'success') {
        message = 'Usuário criado com sucesso';
    } else if (status === 'warning') {
        message = 'Usuário cadastrado, mas tivemos algum problema';
    } else if (status === 'error') {
        message = 'Ocorreu um erro ao cadastrar';
    }

    console.log(message);
*/

let status = 'success';

let message = (status === 'success') ? 'Usuário criado com sucesso' : ((status === 'warning') ? 'Usuário cadastrado, mas tivemos algum problema' : 'Ocorreu um erro ao cadastrar');

console.log(message);

/*
    Aproveite o ajuste acima e extraia o ternário para uma função que recebe o status retorna a mensagem. Caso ela não retorne nada, exiba a mensagem Sem status'.
*/

function criarMensagemStatus(status) {
    switch (status) {
        case 'success':
            return 'Usuário criado com sucesso';
        case 'warning':
            return 'Usuário cadastrado, mas tivemos algum problema'
        case 'error':
            return 'Ocorreu um erro ao cadastrar'
        default:
            break;
    }

    return message || "Sem status";
}


console.log(criarMensagemStatus('success'));