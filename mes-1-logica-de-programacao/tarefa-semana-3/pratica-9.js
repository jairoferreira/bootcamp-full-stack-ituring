/*
Prática 9: Calculando um extrato do banco completo
Aproveite o seu código da Prática 8 e crie uma função no arquivo pratica-9.js que recebendo uma lista de depósitos e retiradas, 
exiba um resumo completo do extrato mensal de sua conta com as seguintes informações no exemplo abaixo.

Dado de entrada da função:

[100, -20, -30, 10, -7, -21, -5]

Total de depósitos: 2
Total de retiradas: 5
O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27
*/


function calcularSaldo(transacoes) {
    let saldo = 0
    let entrdas = 0
    let saidas = 0
    let depositos = 0
    let retiradas = 0

    transacoes.forEach(function (transacao) {
        if (transacao > 0) {
            entrdas = entrdas + transacao
            depositos++
        }

        else {
            saidas = saidas + transacao
            retiradas++
        }

    })
    saldo = entrdas + saidas
    const resumo = saldo > 0 ? "Positivo" : " Negativo"
    
    console.log(`Total de depósitos: ${ depositos }.`)
    console.log(`Total de retiradas: ${ retiradas }.`)
    console.log(`O valor total depositado foi de R$ ${ entrdas }.`)
    console.log(`O valor total retirado foi de R$ ${ saidas *-1}.`)
    console.log(`O saldo final de sua conta foi ${resumo} no valor de R$ ${ saldo }.`)
}

const minhasTransacoes = [100, -20, -30, 10, -7, -21, -5]

calcularSaldo(minhasTransacoes)