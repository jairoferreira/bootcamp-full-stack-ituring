function calcularDesconto(valorProduto, desconto) {
    let valorDesconto = valorProduto * desconto / 100;
    let totalMenosDesconto = valorProduto - valorDesconto;
    return totalMenosDesconto;
}

console.log(calcularDesconto(100, 10))

// Não consegui aplicar a moeda : toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});