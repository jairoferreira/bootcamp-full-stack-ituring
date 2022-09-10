// minha solução //
let quadrados = [4, 9, 16, 25, 36, 49]

let raizes = quadrados.map(numero => Math.sqrt(numero));

console.log(raizes);

// solução da Ituring //

let geradorRaizQuadradaS1 = lista => {
    return lista.map(valor => {
        return Math.sqrt(valor)
    })
}

/* SOLUÇÃO 2 (Resolvendo o desafio) */
let geradorRaizQuadradaS2 = lista => lista.map(valor => Math.sqrt(valor))

/* TESTANDO AS SOLUÇÕES */
const listaNumeros = [4, 9, 16, 25, 36, 49]
console.log(geradorRaizQuadradaS1(listaNumeros))

console.log(geradorRaizQuadradaS2(listaNumeros))