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


//solucao da Ituring

/* SOLUÇÃO 1 (Mais difícil a leitura e entendimento) */
let ordenaCrescenteS1 = lista => {
  return lista.sort((valorAnterior, valorAtual) => {
      return valorAnterior - valorAtual
  })
}

/* SOLUÇÃO 2 (Igual a anterior, mas super enxuta) */
let ordenaCrescenteS2 = lista => lista.sort((a, b) => a - b)

/* SOLUÇÃO 3 (Melhor leitura) */
let ordenaCrescenteS3 = lista => {
  return lista.sort((valorAnterior, valorAtual) => {
      if (valorAnterior < valorAtual)
          return -1
      if (valorAnterior > valorAtual)
          return 1
      return 0
  })
}

/* TESTANDO AS SOLUÇÕES */
let listaNumeros = [4, 9, 7, 1, 8, 12]
console.log(ordenaCrescenteS1(listaNumeros))
listaNumeros = [4, 9, 7, 1, 8, 12]
console.log(ordenaCrescenteS2(listaNumeros))
listaNumeros = [4, 9, 7, 1, 8, 12]
console.log(ordenaCrescenteS3(listaNumeros))