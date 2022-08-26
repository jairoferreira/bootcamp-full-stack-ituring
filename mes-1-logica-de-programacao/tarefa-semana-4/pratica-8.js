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
