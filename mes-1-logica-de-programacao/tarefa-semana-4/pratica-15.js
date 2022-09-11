/*
Valor exibido pela função:
Cristina está a caminho com o carro Fox de placa ABC1234. Chega em 3 minutos.
Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
Dica: utilize o método `.sort()` para fazer a ordenação.
*/

/* SOLUÇÃO */
let exibeCarroACaminho = listaVeiculos => {
    const veiculoMaisProximo = listaVeiculos.sort((veiculoAnterior, veiculoAtual) =>
        veiculoAnterior.tempoEstimado - veiculoAtual.tempoEstimado
    )[0]

    console.log(`${veiculoMaisProximo.motorista} está a caminho com o carro Fox de placa ${veiculoMaisProximo.placa}. Chega em ${veiculoMaisProximo.tempoEstimado} minutos.`)
}

/* TESTANDO A SOLUÇÃO */
const listaVeiculos = [{
    motorista: "Thais S.",
    avaliacao: 9.8,
    tempoEstimado: 7,
    veiculo: "Palio",
    placa: "ABC4321"
},
{
    motorista: "Thales Gonçalves",
    avaliacao: 8.9,
    tempoEstimado: 4,
    veiculo: "Celta",
    placa: "ABC0987"
},
{
    motorista: "José Lopes",
    avaliacao: 9.9,
    tempoEstimado: 5,
    veiculo: "Fox",
    placa: "ABC1234"
},
{
    motorista: "Cristina Souza",
    avaliacao: 9.3,
    tempoEstimado: 3,
    veiculo: "Fox",
    placa: "ABC1234"
},
{
    motorista: "Leo Garcia",
    avaliacao: 8.5,
    tempoEstimado: 9,
    veiculo: "Ka",
    placa: "ABC8765"
}]
exibeCarroACaminho(listaVeiculos)