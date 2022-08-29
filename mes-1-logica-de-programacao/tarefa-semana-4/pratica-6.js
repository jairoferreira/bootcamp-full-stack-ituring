let filme = {
    titulo: 'Estrelas Além do tempo',
    notaDeAvaliacao: 7.8,
    duracao: 127,
    anoDePublicacao: 2016,
    categoria: 'Drama',
    seApresentar: function () {
        console.log(
            `O filme ${this.titulo} estreou em ${this.anoDePublicacao}, tem a avaliação de ${this.notaDeAvaliacao} `
        )
    }
}

filme.seApresentar()