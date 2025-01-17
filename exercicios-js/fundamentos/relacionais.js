console.log('01)', '1' == 1) // Diferente
console.log('02)', '1' === 1) // Estritamente diferente (tipo)
console.log('03)', '3' != 3) // Diferente
console.log('04)', '3' !== 3) // Estritamente diferente (tipo)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('07)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', d1.getTime() == d2.getTime()) // Porque tem o mesmo valor.
console.log('13)', undefined == null)
console.log('14)', undefined === null)

//OBS.: Via de regra usar o 'estritamente igual' por causa de tipos diferentes.
