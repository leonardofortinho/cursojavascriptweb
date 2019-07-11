const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // O push adiciona novos elementos no array.
console.log(valores)

console.log(valores.pop()) // O pop tirar o último valor do array.
delete valores[0] // O delete apaga a informação baseado no indice indicado no colchetes
console.log(valores)

console.log(typeof valores)