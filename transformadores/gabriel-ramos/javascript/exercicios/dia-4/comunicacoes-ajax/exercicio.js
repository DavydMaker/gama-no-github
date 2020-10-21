/*
    Faça uma chamada para a API https://jsonplaceholder.typicode.com/users e liste todos os usuários no console:

    >> Utilizando XHR (dica: utilize a função JSON.parse para converter os dados de um texto para objeto JavaScript);
    >> Utilizando Fetch.
*/

const api = new XMLHttpRequest();

api.onload = function () {
    console.log(JSON.parse(this.response));
    // console.log(this.response);
}
// api.responseType = 'json';
api.open('GET', 'https://jsonplaceholder.typicode.com/users');
api.send();

//

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => console.log(res))