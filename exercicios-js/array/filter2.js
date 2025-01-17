Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nomes: 'Notebook', preco: 2499, fragil: true },
    { nomes: 'iPad Pro', preco: 4199, fragil: true },
    { nomes: 'Copo Vidro', preco: 12.49, fragil: true },
    { nomes: 'Copo de Plástico', preco: 2499, fragil: false },
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))