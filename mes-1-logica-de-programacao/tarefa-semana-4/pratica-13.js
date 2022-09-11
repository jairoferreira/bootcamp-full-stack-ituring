let ordenaExtratoDataDecrescente = listaMovimentacoes => {
    return listaMovimentacoes.sort((valorAnterior, valorAtual) => {
        let dataAnterior = new Date(valorAnterior.dataMovimentacao)
        let dataAtual = new Date(valorAtual.dataMovimentacao)
        if (dataAtual < dataAnterior)
            return -1
        if (dataAtual > dataAnterior)
            return 1
        return 0
    })
}

/* TESTANDO A SOLUÇÃO */
const listaMovimentacoes = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
}]
console.log(ordenaExtratoDataDecrescente(listaMovimentacoes))