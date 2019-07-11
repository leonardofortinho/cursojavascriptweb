// Notação ponto é o '.' entre um objeto ou função (Ex. Math.ceil; console.log; obj1.nome...)

console.log(Math.ceil(6.1)) // O 'ceil' faz um arredondamento pra cima.

const obj1 = {}
obj1.nome = 'Bola' // Forma 1
// obj1['nome'] = 'Bola2' // Forma 2
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome  // Cria um atributo público da função.
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
