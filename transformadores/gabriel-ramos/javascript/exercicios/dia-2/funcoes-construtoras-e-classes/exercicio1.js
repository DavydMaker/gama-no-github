/*
    Seguindo o objeto:

    const pessoa = {
        nome: 'Gabriel',
        gatos: [
            'Lora',
            'Logan',
            'LeBeau',
        ]
    };


    pessoa.exibeGatos() // deverá imprimir no console 'Lora', 'Logan' e 'LeBeau'
    
    Crie uma função construtora que recebe nome e gatos como parâmetro e cria o objeto com a estrutura acima.
*/

function Pessoa(nome, gatos) {
    this.nome = nome;
    this.gatos = gatos;

    this.exibeGatos = function () {
        this.gatos.forEach(gato => console.log(gato));
    }
}

const pessoa = new Pessoa('Gabriel', ['Lora', 'Logan', 'LeBeau']);

pessoa.exibeGatos();