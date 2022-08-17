function checaImc2(peso, altura) {
    const imc = peso / (altura * altura)

    if (imc < 18.5)
        return "Abaixo do Peso"
    if (imc < 25)
        return "Peso Normal"
    if (imc < 30)
        return "Sobrepeso"

    return "Obesidade"
}


function checaImc1(peso, altura) {
    const imc = peso / (altura * altura)
    let classificaImc

    if (imc < 18.5)
        classificaImc = "Abaixo do Peso"
    else if (imc < 25)
        classificaImc = "Peso Normal"
    else if (imc < 30)
        classificaImc = "Sobrepeso"
    else
        classificaImc = "Obesidade"

        return classificaImc

}

console.log(checaImc1(62, 1.65))
console.log(checaImc2(73, 1.7))