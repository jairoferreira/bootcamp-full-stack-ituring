
function saudacao(nome) {
    
    console.log(`Olá, ${nome}!`)
}

function mensagem(nomeDoProduto, recebedorDoProduto, enderecoDestinatario) {
    const mensagem = `Fizemos a entrega do produto ${nomeDoProduto} no endereço ${enderecoDestinatario} com sucesso!

O seu produto foi redebido por: ${recebedorDoProduto}

Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`
    console.log(mensagem)
}

function agradecimento(nomedoRemetente) {
       console.log(`Atenciosamente, ${nomedoRemetente}`)
}

saudacao("Jairo")
mensagem("Phone de Ouvido", "Maria Fernanda", "Av. Eduardo Ribeiro")
agradecimento("amazon@amazon.com")
