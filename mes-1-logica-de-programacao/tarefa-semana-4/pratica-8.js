function formatarGenero(generos) {
  const listaSemUltimoGenero = generos.slice(0, generos.length - 1)
  return `${listaSemUltimoGenero.join(', ')} e ${generos[generos.length - 1]}`
}

function minhaListaDeFilmes(filmes) {
  filmes.forEach(filme => {
    const generoFormatado = formatarGenero(filme.genero)

    console.log(`
      ${filme.titulo} (Nota: ${filme.notaAvaliacao})
      • Duração: ${filme.duracao} minutos 
      • Ano de publicação: ${filme.anoPublicacao}
      • Gênero: ${generoFormatado}
     `)
  })

} //Como se ler, ou como se aplica "essas entradas da função???"

const filmes = [{
  titulo: "Estrelas Além do Tempo",
  notaAvaliacao: 7.8,
  duracao: 127,
  anoPublicacao: 2016,
  genero: ["Biografia", "Drama", "História"]
},
{
  titulo: "Top Gun",
  notaAvaliacao: 8.6,
  duracao: 130,
  anoPublicacao: 2022,
  genero: ["Ação", "Drama"]
},
{
  titulo: "O Jogo da Imitação",
  notaAvaliacao: 8.0,
  duracao: 114,
  anoPublicacao: 2014,
  genero: ["Biografia", "Drama", "Suspense", "Guerra"]
}]

minhaListaDeFilmes(filmes)


//solucao da Ituring//

let exibeInfoFilmes = listaFilmes => {
  listaFilmes.forEach(filme => {
      console.log(`${filme.titulo} (Nota: ${filme.notaAvaliacao})`)
      console.log(`• Duração: ${filme.duracao} minutos`)
      console.log(`• Ano de publicação: ${filme.anoPublicacao}`)

      const generosMenosUltimo = filme.genero.slice(0, -1)
      const ultimoGenero = filme.genero.slice(-1)
      const infoGeneros = generosMenosUltimo.join(',') + ' e ' + ultimoGenero

      const resultadoGenero = filme.genero.length > 1 ? infoGeneros : genero[0]

      console.log(`• Gênero: ${resultadoGenero}\n`)
  })
}

/* TESTANDO A SOLUÇÃO */
const listaFilmes = [{
  titulo: "Estrelas Além do Tempo",
  notaAvaliacao: 7.8,
  duracao: 127,
  anoPublicacao: 2016,
  genero: ["Biografia", "Drama", "História"]
},
{
  titulo: "Top Gun",
  notaAvaliacao: 8.6,
  duracao: 130,
  anoPublicacao: 2022,
  genero: ["Ação", "Drama"]
},
{
  titulo: "O Jogo da Imitação",
  notaAvaliacao: 8.0,
  duracao: 114,
  anoPublicacao: 2014,
  genero: ["Biografia", "Drama", "Suspense", "Guerra"]
}]
exibeInfoFilmes(listaFilmes)