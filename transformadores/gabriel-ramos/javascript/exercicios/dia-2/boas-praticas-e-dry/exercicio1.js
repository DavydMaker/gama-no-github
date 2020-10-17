/*
    Organize o código abaixo para manter uma melhor consistência, como preferir:

    const nome  = "Gabriel";
    let age =    24
    var gatos = [
        'Loga',
        "Logan", 'LeBeau']

        for (let i = 0; i < gatos.length; i++   ) {
            console.log(gatos[  i])



        }

    console.log("Execução finalizada");
    console.log('Obrigado por participar');
*/

const nome = 'Gabriel';
const age = 24;
const gatos = [
    'Loga',
    'Logan',
    'LeBeau'
];

gatos.forEach(gato => console.log(gato));

console.log('Execução finalizada');
console.log('Obrigado por participar');