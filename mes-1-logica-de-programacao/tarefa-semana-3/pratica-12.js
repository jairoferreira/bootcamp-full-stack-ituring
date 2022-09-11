/*

function grupos (alunos){
    let alunoIndice = 0
    let gruposAlunos = []
    
    while (alunoIndice < alunos.length) {
            let grupo
       
       if (alunoIndice + 3 < alunos.length) {
           grupo = alunos.slice(alunoIndice, alunoIndice + 2)
         alunoIndice += 2
       } else {
         grupo = alunos.slice(alunoIndice, alunoIndice + 3)
         alunoIndice += 3
       }
       
       gruposAlunos.push(grupo)
    }
    
    gruposAlunos.forEach((item, index) => {
        console.log(`Grupo ${index + 1}: ${item.join(', ')}`)
    })
 }
 
 let turma = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]
 
 grupos(turma)

 */

/* SOLUÇÃO 4 (Melhor solução. Completa, de fácil leitura e entendimento) */
let exibeGruposFormadosS4 = (lista, tamGrupo) => {
  let grupos = []
  const tamLista = lista.length
  const qtdGrupos = parseInt(tamLista / tamGrupo)
  const qtdGruposMenosUm = qtdGrupos - 1

  // Montando os grupos e colocando dentro de `grupos`
  for (let i = 0; i < qtdGruposMenosUm; i++) {
    const indiceInicioGrupoAtual = i * tamGrupo
    const indiceFimGrupoAtual = indiceInicioGrupoAtual + tamGrupo
    const grupoAtual = lista.slice(indiceInicioGrupoAtual, indiceFimGrupoAtual)
    grupos.push(grupoAtual)
  }

  const indiceInicioUltimoGrupo = qtdGruposMenosUm * tamGrupo
  grupos.push(lista.slice(indiceInicioUltimoGrupo, tamLista))

  // Exibindo cada pessoa de cada grupo montado (veja que com o método .join() fica muito mais fácil colocar a vírgula entre os membros do grupo)
  for (let i = 0; i < grupos.length; i++) {
    console.log(`Grupo ${i + 1}: ${grupos[i].join(', ')}`)
  }
}
/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO 4:
• Veja que não precisamos usar nenhuma verificação com 'if'
• Veja como que o uso do método .slice() e .join() deixou tudo muito mais prático
*/

/* TESTANDO A SOLUÇÃO */
/* TESTANDO AS SOLUÇÕES */
let lista = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro", "Pedro Abreu", "Gilberto Machado", "Guilherme Rodrigues", "Augusto Roberto"]

exibeGruposFormadosS4(lista, 1)
exibeGruposFormadosS4(lista, 2)
exibeGruposFormadosS4(lista, 3)
exibeGruposFormadosS4(lista, 4)