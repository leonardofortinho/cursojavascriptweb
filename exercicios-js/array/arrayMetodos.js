const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro! - Remove o último item da lista
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro item da lista.
console.log(pilotos)

pilotos.unshift('Haminton') //Aidiciona na primeira posição
console.log(pilotos)

// Splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3, 1) //Massa quebrou novamente =(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array gerado a partir deste método.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)