/* 1_Crie uma função que receba apenas 1 argumento de entrada: o número que você
     utilizará para fazer a tabuada.
   2_Nossa tabuada deverá ir de 1 ao 10
   3_Neste problema, você deverá utilizar o comando while
   4_Dentro da função, exiba a tabuada no terminal.     Por exemplo, se o valor 
     de entrada da função for 9,      você deverá exibir o seguinte resultado na
     tela com console.log():
*/

console.log("tabuada de 9")
function tabuada(x, n) {
    let i = 1;
    let tabuada = 1

    while (i <= n) {
        tabuada = 9 * i
        i += 1
        console.log(`${i} x ${9} = ${tabuada}`)
    }
}
tabuada(1, 10)
