let valor // não inicializada
console.log(valor)

valor = null // ausência de valor. Valor vazio
console.log(valor)
/* console.log(valor.toString())  // Gera um problema de TypeError. Porque o valor é nulo, ou vazia. 
Não dá para acessar nada se o valor estiver null ou undefined */ 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco) // Transforma em boolean
// delete produto.preco // É a forma de tirar um atributo de um obejto.
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)