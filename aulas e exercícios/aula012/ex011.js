var idade = 71
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
        console.log('Voto opcional')
} else if ( idade >= 18 && idade <= 69) {
    console.log('Voto obrigatório')
} else {
    console.log ('Voto opcional')
}