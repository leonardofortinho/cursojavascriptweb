// Este tipo de operação aritmética dá o resultado 'Infinity'
console.log(7 / 0)

/* Pode-se fazer operações aritméticas pode interagir com uma string.
Obs.: Se tiver um número com vírgula, ele não vai interagir porque não reconhece o número. Lembrando que
só reconhece números flutuantes se tiver o '.'.
*/
console.log("10" / 2)

// Não vai reconhecer porque é um 'texto'. Vai dar o 'NaN' (Not a Number)
console.log('Show!' * 2)

console.log(0.1 + 0.7) // Segue as mesas especificações de outras linguagens

// console.log(10.toString()) // Não funciona

console.log((10.345).toFixed(2)) // Executa o número, mas mostrando só duas casas após a vírgula

console.log('3' + 2) // Aqui ele vai concatenar. Se subtrair ele vai diminuir do número da string
