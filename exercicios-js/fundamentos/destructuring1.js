// Novo recurso do ES2015
// Fazendo o destructuring a partir de um objeto

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // O '{ }' é o operador de desestruturar da constante e trazer as informações dentro da estrutura.
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //Nesta forma se atribui o 'n' e o 'i' as atribuições feitas na estrutura.
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //Aqui foi atribuido um valor padrão 'true' para o valor não sair undefined
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)