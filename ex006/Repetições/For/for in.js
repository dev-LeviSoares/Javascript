const user = {
    name: 'Rodolfo', /* O 'name' é uma key(chave)*/ 
    age: 33,
    street: "Rua dos Bobos"
}

// user['name'] --> Rodolfo 
// user.name --> Rodolfo
// Ele ira procura o valor X dentro da key do objeto(array)

for(let key in user){
     console.log(user[key]) // De forma automatizada ele ira mostrar o valor das chaves(keys)
}