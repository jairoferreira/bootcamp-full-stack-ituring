/*Fizemos a entrega do produto NomeDoProduto no endereço EnderecoDeEntrega 
com sucesso!
O seu produto foi recebido por: NomeDaPessoaQueRecebeuOProduto Esperamos que você 
esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que 
possamos ajudar.*/

function digaOla(nome) {

    console.log("Olá ," + nome)

}
let NomeDoProduto = "Fone de Ouvido"
let EnderecoDeEntrega = "Av. Eduardo Ribeiro nº 20 - Centro - Manaus-AM"
let NomeDaPessoaQueRecebeuOProduto = "Maria Expedita"
let NomeDaPessoaQueEnviouOEmail = "amazon@amazon.com"

digaOla("Jairo Ferreira");

console.log(`Fizemos a entrega do produto ${NomeDoProduto}, no endereço ${EnderecoDeEntrega} 
com sucesso!`)
console.log(`O seu produto foi recebido por: ${NomeDaPessoaQueRecebeuOProduto} Esperamos que você 
esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que 
possamos ajudar.`)

console.log("Atenciosamente, " + NomeDaPessoaQueEnviouOEmail);
