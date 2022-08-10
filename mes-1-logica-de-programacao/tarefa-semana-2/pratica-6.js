let calculaDesconto = (valorDoProduto, desconto) => {
    let valorDesconto = valorDoProduto * desconto / 100;
    let totalMenosDesconto = valorDoProduto - valorDesconto;
    return totalMenosDesconto

}
console.log(calculaDesconto(100, 10))