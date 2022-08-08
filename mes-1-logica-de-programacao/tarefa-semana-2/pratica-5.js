var fatorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};

console.log(fatorial(3));

function soma2numeros(a, b) {
  return a+b
}

console.log(soma2numeros(1, 1)) // exibe na tela o valor 2

var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e
não ${2 * a + b}.`);
// "Quinze é 15 e
// não 20."