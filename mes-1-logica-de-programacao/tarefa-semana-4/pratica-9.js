function criarUsuario(nome, idade, cidade, livrosPreferidos) {
    let objeto = {}

    objeto.nome = nome
    objeto.idade = idade
    objeto.cidade = cidade
    objeto.livrosPreferidos = livrosPreferidos
    objeto.maiorDeIdade = idade > 18 ? true : false

    objeto.seApresentar = function () {
        return `Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`

    }
    return objeto
}

let usuarioJairo = criarUsuario("Jairo", 39, "Manaus", "50 Tips JavaScrip")
let usuarioIngrid = criarUsuario("Ingrid", 37, "Manaus", "Acumpuntura - Direto ao Ponto")
console.log(usuarioJairo.seApresentar())
console.log(usuarioIngrid.seApresentar())