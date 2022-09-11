let exibeExtratoCompleto = listaMovimentacoes => {
    let saldoFinal = 0
    let depositos = 0
    let retiradas = 0
    let qtdDepositos = 0
    let qtdRetiradas = 0
    listaMovimentacoes.forEach(movimentacao => {
        const ehDeposito = movimentacao.movimentacao === "deposito"
        const ehRetirada = movimentacao.movimentacao === "retirada"
        qtdDepositos += ehDeposito ? 1 : 0
        qtdRetiradas += ehRetirada ? 1 : 0
        depositos += ehDeposito ? movimentacao.valor : 0
        retiradas += ehRetirada ? movimentacao.valor : 0
        saldoFinal += ehDeposito ? movimentacao.valor : 0
        saldoFinal += ehRetirada ? -movimentacao.valor : 0
    })
    const positivoOuNegativo = saldoFinal >= 0 ? "positivo" : "negativo"

    console.log(`Total de depósitos: ${qtdDepositos}`)
    console.log(`Total de retiradas: ${qtdRetiradas}`)
    console.log(`O valor total depositado foi de: R$ ${depositos}`)
    console.log(`O valor total retirado foi de: R$ ${retiradas}`)
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}`)
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
exibeExtratoCompleto(listaMovimentacoes)