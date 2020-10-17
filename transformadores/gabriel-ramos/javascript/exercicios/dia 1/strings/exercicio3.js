/*
    Complete o script abaixo. Ele deve exibir true somente se a categoria da mensagem for success, em casos de warning ou error deve exibir false:

    const mensagem1 = '[success] Cadastro concluído com sucesso';
    const mensagem2 = '[warning] Cadastro concluído com sucesso, mas alguns dados estão inconsistentes';
    const mensagem3 = '[error] Erro ao inserir cadastro';

    console.log(); // deve exibir true quando verificando mensagem1
    console.log(); // deve exibir false quando verificando mensagem2
    console.log(); // deve exibir false quando verificando mensagem3
*/

const mensagem1 = '[success] Cadastro concluído com sucesso';
const mensagem2 = '[warning] Cadastro concluído com sucesso, mas alguns dados estão inconsistentes';
const mensagem3 = '[error] Erro ao inserir cadastro';

const tipoMensagem = "[success]";

console.log(mensagem1.startsWith(tipoMensagem)); // deve exibir true quando verificando mensagem1
console.log(mensagem2.startsWith(tipoMensagem)); // deve exibir false quando verificando mensagem2
console.log(mensagem3.startsWith(tipoMensagem)); // deve exibir false quando verificando mensagem3