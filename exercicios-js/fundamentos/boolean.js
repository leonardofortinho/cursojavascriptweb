// Fomar 1 de valores boolean
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//Forma 2 de valores boolean
isAtivo = 1
console.log(!1) // O '!' se configura como not e seguido de um número vira false.
console.log(!!1) // O '!!' se configura como not not, duas vezes, então ele se torna true.

console.log('os verdadeirs...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // Se tiver um único valor 'verdadeiro', ele vai dar verdadeiro

let nome = ''

console.log(nome || 'Desconhecido') //Caso a string esteja vazia, ele vai imprimir o desconhecido