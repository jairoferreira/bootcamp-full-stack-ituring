
/*
const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

const index = seriados.findIndex((seriados) => seriados === "Dexter");

console.log(index);
console.log(seriados[index]);
*/

let procuraItemEmLista = (lista, valor) => {
  let indiceValorEncontrado = undefined

  // Obs: o lado ruim do forEach é que não tem como usar o comando `return` pra retornar o índice encontrado. Ou seja, você vai sempre precisar varrer toda a lista, o que é menos eficiente.
  lista.forEach((valorAtual, indice) => {
      if (valorAtual === valor)
          indiceValorEncontrado = indice
  })

  return indiceValorEncontrado
}

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(procuraItemEmLista(listaSeriados, "Game of Thrones"))
console.log(procuraItemEmLista(listaSeriados, "Friends"))
