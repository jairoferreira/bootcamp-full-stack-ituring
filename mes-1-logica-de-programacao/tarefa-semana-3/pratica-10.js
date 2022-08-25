/*
Prática 10: Registrando a quantidade de votos
Em uma contagem de votos para os preferidos para ganhar a próxima Copa do Mundo de futebol, foi feita uma votação por meio de códigos que obedecem as seguintes regras:

Código 1: Brasil
Código 2: Argentina
Código 3: Espanha
Código 4: Portugal
Os votos foram computados e registrados em uma lista.

Agora eles precisam de uma pessoa que saiba programar para computar o resultado. Ou seja, de você!

Por isso, crie uma função no arquivo pratica-10.js que recebendo como argumento uma lista de votos, exiba na tela quantos votos recebeu cada país com base no código acima.

Dados de entrada da função:

[1, 1, 1, 4, 4, 2, 3, 2]
Chamando a função:

suaFuncao([1, 1, 1, 4, 4, 2, 3, 2])
Valor exibido pela função:

Brasil: 3 voto(s)
Argentina: 2 voto(s)
Espanha: 1 voto(s)
Portugal: 2 voto(s)

Resultado:
Brasil é o preferido para ganhar a Copa do Mundo!

*/

function contarVotos(votos) {
    let votosBrasil = 0
    let votosArgitina = 0
    let votosEspanha = 0
    let votosPortugual = 0
    let paisVencedor = ""

    votos.forEach(function (voto) {
        if (voto === 1) {
            votosBrasil++
        }
        else if (voto === 2) {
            votosArgitina++
        }
        else if (voto === 3) {
            votosEspanha++
        }
        else { votosPortugual++ }

    });

    if (votosBrasil > votosArgitina && votosBrasil > votosEspanha && votosBrasil > votosPortugual) {
        paisVencedor = "Brasil"
    }
    else if (votosArgitina > votosBrasil && votosArgitina > votosEspanha && votosArgitina > votosPortugual) {
        paisVencedor = "Argentina"
    }
    else if (votosEspanha > votosBrasil && votosEspanha > votosArgitina && votosEspanha > votosPortugual) {
        paisVencedor = "Espanha"
    }
    else { paisVencedor = "Portugual" }

    console.log(`Brasil: ${votosBrasil} voto(s)`)
    console.log(`Argentina: ${votosArgitina} voto(s)`)
    console.log(`Espanha: ${votosEspanha} voto(s)`)
    console.log(`Portugal: ${votosPortugual} voto(s)`)
    console.log(`${paisVencedor} é o preferido para ganhar a Copa do Mundo!`)
}

contarVotos([1, 1, 4, 4, 4, 2, 3, 2])