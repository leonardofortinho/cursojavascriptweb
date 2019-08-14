// Object.preventExtensions - Previne que seja extendido/adicionado novos atributos do objeto. Porém consegue-se mudar seus atributos ou deletar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.discricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - Sela o objeto, nao consegue adicionar novos tributos, não se pode excluir atributos, mas se consegue modificar os valores do objeto.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = sela + valores constantes
