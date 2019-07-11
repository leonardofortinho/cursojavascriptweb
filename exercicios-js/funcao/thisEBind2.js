function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {  //setInterval Dispara uma outra função a parti de um determinada intervalo que for passado
/*this*/self.idade++  //Nesse caso foi trocado o 'this' por 'self'
        console.log(self.idade)
    }/*.bind(this)*/, 1000)  //Exemplo com 'bind'
}

new Pessoa