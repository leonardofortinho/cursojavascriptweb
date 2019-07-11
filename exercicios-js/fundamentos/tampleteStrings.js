const  nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

/* Outra forma de concatenar, sem fazer muitas linhas de comando. Sempre usar o backchip ou crase (``).
Também aceita quebra de linha (como o no exemplo)
Obs.: O ${variavel/constante} será lida. 
*/
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //O toUpperCase() transforma em letra maiscula.
console.log(`Ei... ${up('cuidado')}!`)
