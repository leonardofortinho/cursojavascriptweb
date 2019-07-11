// O perador ternário é quando ele faz mais de uma operação em três partes, 
//no caso, depois da nota ele vai fazer a comparação (bool) e vai decidir se a nota é maior ou menor.
//O item '=>' é função arrow.

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))