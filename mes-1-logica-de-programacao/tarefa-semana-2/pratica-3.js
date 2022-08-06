function gerarNumeroAleatorio() {
    min = 0
    max = 10000
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numero = gerarNumeroAleatorio()
console.log(numero)