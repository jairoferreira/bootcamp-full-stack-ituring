/*
"Recebendo como argumento uma lista de seriados e um termo de pesquisa, retorne uma lista com todos os seriados que possuem aquele termo. Veja o exemplo abaixo.".

Agora, altere o código da solução e utilize o método .filter.
*/

let listaDeSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
function seriadoComTh(seriados, searchText) {
    return seriados.filter(function (item) {
        return item.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    });
}
console.log(seriadoComTh(listaDeSeriados, "Th"))