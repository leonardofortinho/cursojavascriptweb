{
    {
        {
            {
                var sera = 'Será???' // Variável Global
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123 // Variável de Escopo (só é vista dentro da função)
    console.log(local)
}

teste()
console.log(local)