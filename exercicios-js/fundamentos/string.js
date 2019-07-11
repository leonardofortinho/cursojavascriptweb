const escola = 'Cod3r'

console.log(escola.charAt(4)) // O charAt() seleciona qual o caracter que vai ser impresso.
console.log(escola.charAt(5)) // Não dá erro, mas não funciona porque não existe o caracter.
console.log(escola.charCodeAt(3)) // O charCodeAt() mostra o valor na table ASCII ou UNICODE. Ele retorna o código HTML
console.log(escola.indexOf('3')) // o indexOf trás o indice do digito na variável

console.log(escola.substring(1)) // O substring trás a sequência de caracter da string do indice selecionado para frente.
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))  // O concat concatena as string.
console.log('Escola ' + escola + "!") // Outra forma de concatenar
console.log(escola.replace(3, 'e')) // O replace substitui uma string, buscando do indice.

console.log(escola.replace(/\d/, 'e')) // /\d/ é uma expressão regular que subsitui todos os digitos pela letra 'e'.
console.log(escola.replace(/\w/g, 'e')) // Substitui todos o caracteres pela letra 'e'. Obs.: a flag /g significa global.

console.log('Ana,Maria,Pedro'.split(',')) // O Split vai transformar essa string em uma array.