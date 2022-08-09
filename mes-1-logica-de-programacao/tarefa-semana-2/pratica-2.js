let nomeDoProduto ="Phone de Ouvido"
let enderecoDestinatario = "Av. Eduardo Ribeiro"
let recebedorDoProduto = "Maria Fernanda"
let nomedoRemetente = "Antonio José"

function digaOla(nome) {
    
    console.log(`Olá,` + nome)
}

function corpo(nomeDoProduto, recebedorDoProduto, enderecoDestinatario) {
    const mensagem = `Fizemos a entrega do produto ${nomeDoProduto} no endereço ${enderecoDestinatario} com sucesso!

O seu produto foi redebido por: ${recebedorDoProduto}

Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`
    console.log(mensagem)
}

function agradecimento(nomedoRemetente) {
       console.log(`Atenciosamente, ${nomedoRemetente}`)
}

digaOla("Jairo")
corpo(nomeDoProduto, recebedorDoProduto, enderecoDestinatario)
agradecimento(nomedoRemetente)
