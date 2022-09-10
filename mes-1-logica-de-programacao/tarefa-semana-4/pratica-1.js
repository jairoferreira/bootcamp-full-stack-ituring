let exibeLista = lista => {
    lista.forEach((valorAtual, indice) => {
        console.log(`[${indice}] ${valorAtual}`)
    })
}

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
exibeLista(listaSeriados)
