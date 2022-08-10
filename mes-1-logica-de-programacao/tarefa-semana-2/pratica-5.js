let calculaDesconto = function (valorDoProduto, desconto) {
    let valorDesconto = valorDoProduto * desconto / 100;
    let totalMenosDesconto = valorProduto - valorDesconto;
    return totalMenosDesconto

}
console.log(calculaDesconto(100, 10))