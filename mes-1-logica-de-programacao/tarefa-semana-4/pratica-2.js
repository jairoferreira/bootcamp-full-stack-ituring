
/*
const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

const index = seriados.findIndex((seriados) => seriados === "Dexter");

console.log(index);
console.log(seriados[index]);
*/

function encontrar(array, nome) {
  let indiceEncontrado = undefined

  array.forEach(function (item, index) {
    if (item === nome) {
      indiceEncontrado = index
    }
  })
 // return indiceEncontrado
}

console.log(encontrar["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"],
"Dexter")