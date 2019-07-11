const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falarPessoa = pessoa.falar.bind(pessoa) //Bind amarra o objeto do método. No caso ele chama o método que está dentro dele, que é o this.
falarPessoa()