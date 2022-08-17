const calculaImc = (peso, altura) => peso / (altura * altura)

function classificaImc1(imc) {
    if (imc < 18.5)
        return "Abaixo do Peso"
    if (imc < 25)
        return "Peso Normal"
    if (imc < 30)
        return "Sobrepeso"

    return "Obesidade"
}


function checagemImc2(peso, altura) {
    const imc = calculaImc(peso, altura)
    console.log(classificaImc1(imc))

}

console.log(classificaImc1(90, 1.7))

checagemImc2(62, 1.65)