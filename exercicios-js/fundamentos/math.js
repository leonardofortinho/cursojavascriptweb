const raio = 5.6
/* Aqui o 'Math.pow(raio, 2) significa: Math = objeto, pow = power, 
(raio, 2) é o raio elevado a 2 (potencia)
*/
const area = Math.PI * Math.pow(raio, 2)

console.log(area.toFixed(2))
console.log(typeof Math)