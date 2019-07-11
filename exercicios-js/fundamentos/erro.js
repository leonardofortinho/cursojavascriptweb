function tratarErroELancar(erro) {
    //Estas são as formas de lançar o erro, quando o catch é chamado.
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }
}

function imprimirNomeGritado(obj){
    try{  // Bloco que pode gerar um problema.
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e) { // Este quando tem um problema no fluxo, vai ser direcionado ao cath. Isso recai no throw, aonde se informa qual é o erro.
        tratarErroELancar(e)
    } finally { // Vai ser executado para dizer o que foi feito até o final do programa.
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)