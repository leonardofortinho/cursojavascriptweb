const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

// O isSafeInteger diz se é um número inteiro ou não (true ou false). O Number é uma função
console.log(Number.isSafeInteger(peso1))
console.log(Number.isSafeInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// O toFixed() é uma forma de limitar quantas casa depois da vírgula
console.log(media.toFixed(2))

/* O toString() é transformar o número em uma string. 
Obs.: se colocar o 2 entre o parenteses, ele vai colocar o valor binário
*/
console.log(media.toString())
console.log(media.toString(2)) 

console.log(typeof media)
console.log(typeof Number)