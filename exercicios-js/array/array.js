console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'  //Normalmente dessa forma é usado para subsitituir um item no array
aprovados.push('Abia')  //Dessa forma é mais usado para colocar um novo elemento no array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
/*Splice - Serve para deletar os indices. Primeiro instrui aonde vai começar, 
o segundo é a partir de qual indice, e os outros está adicionando mais indices*/
aprovados.splice(1, 1) 
console.log(aprovados)