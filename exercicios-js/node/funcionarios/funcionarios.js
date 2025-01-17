const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //Axios faz uma requisição HTTP de dados remotos. Pacote instalado via npm

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcActual) => {
    return func.salario < funcActual.salario ? func : funcActual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //,ulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)
})

