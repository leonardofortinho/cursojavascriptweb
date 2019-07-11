function teste1(num){
    if(num > 7)
       console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7)
        ; //É uma sentenção de código vazia, como se fosse usado o chaves, mas no caso foi usado o ';'. Não usar o ';' no bloco as estruturas e controle
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)