const user = {
    name: 'Rodolfo', /* O 'name' é uma key(chave)*/ 
    age: 33,
    street: "Rua dos Bobos"
}

// user['name'] --> Rodolfo 
// user.name --> Rodolfo
// Ele ira procura o valor X dentro da key do objeto(array)
// O for...in em JavaScript é uma estrutura de repetição usada para percorrer as propriedades (chaves) de um objeto.



for(let key in user){
     console.log(user[key]) // De forma automatizada ele ira mostrar o valor das chaves(keys)
}