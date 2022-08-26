/*
Prática 5: Ordenando uma lista de números
Bom, na tarefa da semana passada, você desenvolveu um algoritmo de ordenação! Agora você irá usar o algoritmo de ordenação padrão do JavaScript. Escreva uma função no arquivo pratica-5.js que, dado uma lista de números, retorne a lista em ordem crescente de valor.

Dados de entrada da função:

[4, 9, 7, 1, 8, 12]
*/

//Jeito 1

const numerosOrdemCrescente = [4, 9, 7, 1, 8, 12]
numerosOrdemCrescente.sort(function (a, b) {
  return a - b
});
console.log(numerosOrdemCrescente);

//Jeito 2

const numerosCrescentes = [4, 9, 7, 1, 8, 12]
numerosCrescentes.sort((a, b) => a - b)
console.log(numerosCrescentes)
