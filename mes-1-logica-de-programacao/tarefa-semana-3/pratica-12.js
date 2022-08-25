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