let valores = [1, 8, 2, 9, 3, 10, 13, 17]

console.log(valores)

let pos = valores.indexOf(11) 
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}
