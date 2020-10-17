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
    
    Crie uma classe que recebe nome e gatos como parâmetro e cria o objeto com a estrutura acima.
*/

class Pessoa {
    constructor(nome, gatos) {
        this.nome = nome;
        this.gatos = gatos;
    }

    exibeGatos() {
        this.gatos.forEach(gato => console.log(gato));
    }
}

const pessoa = new Pessoa('Gabriel', ['Lora', 'Logan', 'LeBeau']);

pessoa.exibeGatos();