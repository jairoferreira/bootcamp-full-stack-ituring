/*
Neste exemplo, se a for maior que b, ele retorna o valor de a. Caso contrário, 
ele retorna o valor de b. Portanto, neste caso, o valor armazenado em maior é o 
valor b, pois a não é maior que b, ou seja, a condição a > b é false. Como você 
faria pra retornar o menor valor? Esta será a prática 13.

1. Crie uma função que receba 2 números no arquivo pratica-13.js.
2 .Utilize o operador ternário para retornar o menor valor entre os 2 números
*/

const menorDeDois = (num1, num2) => num1 < num2 ? num1 : num2
console.log(menorDeDois(3, 4))
console.log(menorDeDois(4, 4))
console.log(menorDeDois(3, 5))
console.log(menorDeDois(-10, -20))
