let n = 1, impares = "";
while (n <= 17) {

    impares += !(n % 2 == 0) ? n + "," : "";
    n++;
};

console.log(`Dado de entrada da função: ${"17"}`)
console.log(impares);