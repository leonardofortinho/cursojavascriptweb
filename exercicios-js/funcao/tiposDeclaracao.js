console.log(soma(3, 4)) // Pode ser usar a função dessa forma, porque ela vai ler as funções e depois vai chamar ela, na Function Declaration.
// console.log(sub(3, 4)) Não vai funcionar porque ela só poderá ser chamada, depois que a função for declarada.
// console.log(mult(3, 4)) Não vai funcionar pelo mesmo motivo a cima.

// Function Declaration
function soma(x, y) {
    return x + y
}

// Function Expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// Named Function Expression (Não é muito usada)
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))