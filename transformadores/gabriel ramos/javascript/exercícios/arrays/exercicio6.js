/*
    Dado o seguinte array:

const messages = [
    '[success] Cadastro_concluído_com_sucesso',
    '[warning] Cadastro_concluído_com_sucesso,_mas_alguns_dados_estão_inconsistentes',
    '[error] Erro_ao_inserir_cadastro'
]
    Escreva um script que retorna ['success', 'warning', 'error'].
*/

const messages = [
    '[success] Cadastro_concluído_com_sucesso',
    '[warning] Cadastro_concluído_com_sucesso,_mas_alguns_dados_estão_inconsistentes',
    '[error] Erro_ao_inserir_cadastro'
];

const categorias = messages.map(message => message.split(' ')[0].replace('[', '').replace(']', ''));

console.log(categorias);