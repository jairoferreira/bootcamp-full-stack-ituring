function descobrirParOuImpa(numero) {
    let par = numero%2 === 0
    if (par) {
        console.log(`O número ${numero} é par`)
    } else {
        console.log(`O número ${numero} é impar`)
    }
}

descobrirParOuImpa(0)
descobrirParOuImpa(7)
descobrirParOuImpa(99)
descobrirParOuImpa(-66)