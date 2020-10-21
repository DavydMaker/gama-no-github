/*
    Utilizando Fetch, faça uma chamada para a API https://jsonplaceholder.typicode.com/users e liste todos os usuários no console.

    >> Realizando as tratativas para caso de erro;
    >> Depois, adapte o código para utilizar Async/Await.
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res => console.log(res))

//

async function main(url){
    const res = await fetch(url).then(res => res.json());
    console.log(res);
    return res;
}

main('https://jsonplaceholder.typicode.com/users');