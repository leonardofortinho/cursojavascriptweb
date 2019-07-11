//OBS.: Hoisting é um inçamento de uma variável, ela, em tese, é jogada pra cima (içada)

//Com o 'var'

//Ex.:
console.log('a =', a)
var a = 2
console.log('a =', a)

//Ex.:
function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()

// Com o 'let'

console.log('b =', b)
let b = 2
console.log('b =', b)

// Obs.: Com o 'let' não funciona o hoisting