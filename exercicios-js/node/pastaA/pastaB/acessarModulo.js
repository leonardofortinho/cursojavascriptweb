const moduloA = require('../../moduloA') // O '../../' ele sai de uma pasta e depois sai da segunda pasta, segue a lógica de um comando shell
console.log(moduloA.ola)

const c = require('./pastaC') //Dessa forma você consegue importar tudo que tem dentro da pasta.
console.log(c.ola2)

//const http = require('http')
//http.createServer((req, res) => {
//    res.write('Bom dia!')
//    res.end()
//}).listen(8080)