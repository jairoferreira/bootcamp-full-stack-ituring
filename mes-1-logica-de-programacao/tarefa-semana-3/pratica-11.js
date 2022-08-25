/*
Crie uma função no arquivo pratica-11.js que recebe como argumento
uma lista de números que representam a contagem de visualizações de vídeos
 de um canal no Youtube. Retorne a lista com os números ordem crescente.

Dado de entrada da função:

[10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]

*/

function ordenar(lista) {
    let ordem = lista.sort(function (a, b) {
        return a - b
    })
    console.log(ordem.join())
}

let listaOrdenada = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]

ordenar(listaOrdenada)

///////////////////////////////////////////////////////////////////////////////////////

let numero = [10, 45, 123, 18, 24, 145];

// Existe uma dúvida quanto aos numeros maiores que mil, caso seja adicionado um valor com milhar, ele perde a formatação de "linha na horizontal
// e neste caso foi necessario adicionar o .join().

function organizarNumeros(a, b) {
    return a - b;
}
console.log('Ordenagem crescente:', numero.sort(organizarNumeros));

