const produtos = [
    { nomes: 'Notebook', preco: 2499, fragil: true },
    { nomes: 'iPad Pro', preco: 4199, fragil: true },
    { nomes: 'Copo Vidro', preco: 12.49, fragil: true },
    { nomes: 'Copo de Plástico', preco: 2499, fragil: false },
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))