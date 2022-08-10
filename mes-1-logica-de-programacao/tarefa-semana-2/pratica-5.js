let calculaDesconto = function (valorProduto, desconto) {
    let valorDesconto = valorProduto * desconto / 100;
    let totalMenosDesconto = valorProduto - valorDesconto;
    return totalMenosDesconto

}
console.log(calculaDesconto(100, 10))