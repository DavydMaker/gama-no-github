/*
    Crie uma função chamada meuFetch que utiliza XHR e aplica uma Promise simulando a função fetch que usamos anteriormente.
*/

function meuFetch(url) {
    const api = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        try {
            api.onload = function () {
                resolve(this.response);
            }
            api.responseType = 'json';
            api.open('GET', url);
            api.send();
        } catch (err) {
            reject(err);
        }

    });
}

meuFetch('https://viacep.com.br/ws/01001000/json/')
    .then(res => console.log(res));