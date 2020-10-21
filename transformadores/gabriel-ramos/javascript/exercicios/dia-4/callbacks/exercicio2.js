/*
    Como adaptar a função abaixo para receber um callback que será executado com o resultado da operação ao invés de fazer um alert?

    const computacaoMuitoCustosa = () => {
        const superCalculo = 1 + 2;
        alert(superCalculo)
    }

    computacaoMuitoCustosa();
*/

const computacaoMuitoCustosa = (call) => {
    const superCalculo = 1 + 2;
    call(superCalculo);
}

computacaoMuitoCustosa(res => alert(res));