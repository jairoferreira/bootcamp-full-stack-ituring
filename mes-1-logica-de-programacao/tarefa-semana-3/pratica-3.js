function NumeroPrimo(numero){
    for (let divisor = 2; divisor < numero; divisor++){
      if(numero%divisor === 0){
        return false;
      }
    }
    return true;
  }
  
  console.log(NumeroPrimo(17))
  console.log(NumeroPrimo(2))
  console.log(NumeroPrimo(7))
  console.log(NumeroPrimo(8))
  console.log(NumeroPrimo(5))
  console.log(NumeroPrimo(23))
  console.log(NumeroPrimo(15))
  console.log(NumeroPrimo(1500450271))