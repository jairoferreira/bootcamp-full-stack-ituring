/*

Prática 8: Calculando um extrato do banco simples
Aproveite o seu código da Prática 7 e crie uma função no arquivo pratica-8.js que recebendo uma lista de depósitos e retiradas, exiba o resumo do extrato mensal de sua conta com as seguintes informações no exemplo abaixo.

Dado de entrada da função:

[100, -20, -30, 10, -7, -21, -5]
Saída esperada:

O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27

*/

function calcularSaldo(transacoes) {
    let saldo = 0
    let entrdas = 0
    let saidas = 0

    transacoes.forEach(function (transacao) {
        if (transacao > 0) {
            entrdas = entrdas + transacao
        }

        else {
            saidas = saidas + transacao
        }

    })
    saldo = entrdas + saidas
    const resumo = saldo > 0 ? "Positivo" : " Negativo"
    
    console.log(`O valor total depositado foi de R$ ${ entrdas }.`)
    console.log(`O valor total retirado foi de R$ ${ saidas}.`)
    console.log(`O saldo final de sua conta foi ${resumo} no valor de R$ ${ saldo }.`)
}

const minhasTransacoes = [100, -20, -30, 10, -7, -21, -50]

calcularSaldo(minhasTransacoes)