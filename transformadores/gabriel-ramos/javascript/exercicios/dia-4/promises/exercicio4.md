### Qual a diferença dos estados de uma Promise (pending, fulfilled e rejected)? O que faz uma Promise mudar seu estado?

`Pending` é o estado de uma `Promise` construída, antes de ser resolvida com sucesso ou com falha.
`Fulfilled` é o estado de uma `Promise` resolvida com sucesso e `Rejected` com erro. Ao utilizar `resolve` ou `reject` (os parâmetros recebidos na função de callback fornecida na criação da `Promise`) com os dados de sucesso ou erro prodemos alterar seu estado.