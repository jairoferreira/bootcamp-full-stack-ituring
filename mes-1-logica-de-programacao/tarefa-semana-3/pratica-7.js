/*
Crie uma função no arquivo pratica-7.js que recebendo como argumento uma
lista de depósitos e retiradas como no exemplo abaixo, exiba o saldo final da conta.

Dado de entrada da função:

*/


function calcularSaldo(transacoes) {
    let saldo = 0

  transacoes.forEach(function(transacao) {
      saldo = saldo + transacao
  })

  console.log(`O saldo final de sua conta foi positivo no valor de R$ ${saldo}.`)
}

const minhasTransacoes = [100, -20, -30, 10, -7, -21, -5]

calcularSaldo(minhasTransacoes)