let fabricante = {

    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos",

    apresentacao: function () {
        console.log(
            this.marca, this.produto, this.preco, this.quantidade, this.categoria
        )
    }
}

fabricante.apresentacao()