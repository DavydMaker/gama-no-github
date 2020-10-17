/*
    Escreva um script que exibe uma mensagem customizada dependendo do status de um pedido. Seguindo o exemplo:

    const MENSAGEM = 'Qualquer texto';

    const CORES = {
        RED: '#ff0000',
        YELLOW: '#fff000',
        GREEN: '#00FF00'
    };

    const status1 = 'success';
    const status2 = 'warning';
    const status3 = 'error';

    // exibirá a cor CORES.GREEN se o status for success
    // exibirá a cor CORES.YELLOW se o status for warn
    // exibirá a cor CORES.RED se o status for error

    Dica: para customizar o console.log basta colocar %c no início da mensagem e, como segundo valor, informar alguma regra de CSS. Por exemplo:

    console.log('%c Esse texto é customizado', 'background: tomato;')
    Resolva esse exercício com:

    >> if/else;
    >> switch/case.
*/

const MENSAGEM = 'Qualquer texto';

const CORES = {
    RED: '#ff0000',
    YELLOW: '#fff000',
    GREEN: '#00FF00'
};

// exibirá a cor CORES.GREEN se o status for success
// exibirá a cor CORES.YELLOW se o status for warn
// exibirá a cor CORES.RED se o status for error

const status = 'success';
let corSelecionada = '';

if (status == 'success') {
    corSelecionada = CORES.GREEN;
} else if (status == 'warning') {
    corSelecionada = CORES.YELLOW;
} else if (status = 'error') {
    corSelecionada = CORES.RED;
}

console.log(`%c ${MENSAGEM}`, `background: ${corSelecionada}`);

switch (status) {
    case 'success':
        corSelecionada = CORES.GREEN;
        break;
    case 'warning':
        corSelecionada = CORES.YELLOW;
        break;
    case 'error':
        corSelecionada = CORES.RED;
        break;
}

console.log(`%c ${MENSAGEM}`, `background: ${corSelecionada}`);