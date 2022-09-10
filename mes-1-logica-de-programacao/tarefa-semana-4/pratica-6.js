//minha solução//

let filme = {
    titulo: 'Estrelas Além do tempo',
    notaDeAvaliacao: 7.8,
    duracao: 127,
    anoDePublicacao: 2016,
    categoria: 'Drama',
    seApresentar: function () {
        console.log(
            `O filme ${this.titulo} que estreou em ${this.anoDePublicacao} tem a avaliação de ${this.notaDeAvaliacao} pelo IMDB.`
        )
    }
}

filme.seApresentar()


//solução da Ituring//

let exibeDadosFilme = filme => {
    console.log(`O filme ${filme.titulo} que estreou em ${filme.lancamento} tem a avaliação de ${filme.nota} pelo IMDb.`)
}

/* TESTANDO A SOLUÇÃO */
const Ifilme = {
    titulo: "Estrelas Além do Tempo",
    nota: 7.8,
    duracao: 127,
    lancamento: 2016,
    categoria: "Drama"
}
exibeDadosFilme(Ifilme)