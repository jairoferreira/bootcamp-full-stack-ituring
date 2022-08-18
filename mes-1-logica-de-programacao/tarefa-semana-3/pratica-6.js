/*
Recebendo como argumento uma lista de seriados e um termo de pesquisa, 
retorne uma lista com todos os seriados que possuem aquele termo.
Termo a ser buscado: "Th

*/

function pesquisaTermoEmLista(lista, termo) {
    let listaFiltrada = []

    for (let item of lista) {
        if (item.includes(termo)) {
            listaFiltrada.push(item)
        }
    }
    return listaFiltrada
}

let listaDeSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(pesquisaTermoEmLista(listaDeSeriados, "Th"))