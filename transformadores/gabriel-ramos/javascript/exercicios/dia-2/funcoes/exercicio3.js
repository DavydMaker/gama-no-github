/*
    O seguinte código irá disparar um erro onClick is not a function. Como você o corrigiria?

    function principal(onClick) {
        const argumentos = { 
            mensagem: 'oi'
        };
        onClick(argumentos)
    }

    principal(null)
*/

function principal(onClick) {
    const argumentos = {
        mensagem: 'oi'
    };

    if (typeof onClick === Function) {
        onClick(argumentos)
    }
}

principal(null)