// solução da Ituring//

let exibeChavesObjeto = objeto => {
    console.log(Object.keys(objeto))
}

/* TESTANDO A SOLUÇÃO */
const produto = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
}
exibeChavesObjeto(produto)