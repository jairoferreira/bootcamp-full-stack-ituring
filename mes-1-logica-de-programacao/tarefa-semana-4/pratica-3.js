/*
"Recebendo como argumento uma lista de seriados e um termo de pesquisa, retorne uma lista com todos os seriados que possuem aquele termo. Veja o exemplo abaixo.".

Agora, altere o código da solução e utilize o método .filter.
*/

let filtraLista = (lista, valor) => {
    return lista.filter(valorAtual => valorAtual.includes(valor))
}

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(filtraLista(listaSeriados, "Th"))
