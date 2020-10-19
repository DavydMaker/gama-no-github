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

const message = status === 'success'
    ? 'Usuário criado com sucesso'
    : status === 'warning'
        ? 'Usuário cadastrado, mas tivemos algum problema'
        : 'Ocorreu um erro ao cadastrar'

console.log(message);

/*
    Aproveite o ajuste acima e extraia o ternário para uma função que recebe o status retorna a mensagem. Caso ela não retorne nada, exiba a mensagem Sem status'.
*/

function criarMensagemStatus(status) {
    const message = status === 'success'
        ? 'Usuário criado com sucesso'
        : status === 'warning'
            ? 'Usuário cadastrado, mas tivemos algum problema'
            : status === 'error'
                ? 'Ocorreu um erro ao cadastrar'
                : undefined;

    return message || 'Sem status';
}


console.log(criarMensagemStatus('success'));