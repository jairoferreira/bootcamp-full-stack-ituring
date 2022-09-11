/*
Prática 16: Procurando fotos no Google Fotos
O Google Photos utiliza reconhecimento de imagens para criar tags para as suas fotos e permitir que você busque e encontre fotos de cachorro quando você pesquisa por "cachorro" no campo de busca. Ele utiliza machine learning e outros recursos computacionais avançados para criar essas tags.
Pois é, adeus Tuber e bem-vindo ao time de engenharia do Google! Agora você terá que criar uma função no arquivo `pratica-16.js` que receba dois parâmetros:
• a lista de fotos
• o termo de busca
Com os dados de entrada fornecidos, retorne os itens que correspondem a busca.


let buscaFotos = (listaFotos, termoBusca) => {
    return listaFotos.filter(foto => foto.tags.includes(termoBusca))
}

*/
/* SOLUÇÃO */

let buscaFotos = (listaFotos, termoBusca) => {
    return listaFotos.filter(foto => foto.tags.includes(termoBusca))
}
const listaFotos = [{
    endereco: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
    tags: ["cachorro"],
    dataCriacao: "2022-06-08T09:46:36.611Z"
},
{
    endereco: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    tags: ["óculos", "cachorro", "livro"],
    dataCriacao: "2022-06-02T09:46:36.611Z"
},
{
    endereco: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    tags: ["coleira", "praia", "cachorro"],
    dataCriacao: "2022-06-13T09:46:36.611Z"
},
{
    endereco: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    tags: ["gato", "óculos"],
    dataCriacao: "2022-06-12T09:46:36.611Z"
},
{
    endereco: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    tags: ["gato"],
    dataCriacao: "2022-06-10T09:46:36.611Z"
}]
console.table(buscaFotos(listaFotos, "cachorro"))