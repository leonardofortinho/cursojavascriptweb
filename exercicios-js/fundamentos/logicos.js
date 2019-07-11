function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // O pipe '||'significa 'ou' (or)
    const comprarTv50 = trabalho1 && trabalho2 // O '&&' significa 'e' (and)
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete  // Operador Unário. '!' é not.

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

