/*
    Dado o seguinte objeto:

    const pessoa = {
        nome: 'Gabriel',
        gatos: [
            'Lora',
            'Logan',
            'LeBeau',
            'Qual será o próximo?'
        ]
    };
    1) Exiba suas chaves;

    2) Troque a string Qual será o próximo pra Chega, já tá bom né;

    3) Remova a string Chega, já tá bom né e deixa somente os valores restantes no array.
*/

const pessoa = {
    nome: 'Gabriel',
    gatos: [
        'Lora',
        'Logan',
        'LeBeau',
        'Qual será o próximo?'
    ]
};

// Questão 1
console.log(Object.keys(pessoa));

// Questão 2
pessoa.gatos[pessoa.gatos.length - 1] = 'Chega, já tá bom né';

// Questão 3
pessoa.gatos.pop();