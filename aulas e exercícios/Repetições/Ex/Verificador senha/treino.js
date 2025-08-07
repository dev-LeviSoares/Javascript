//function confirmar() { 
    let user = ''
    let password = ''

    while (true) {
        user = prompt("Digite o nome de usuário:")
        senha = prompt("Digite a senha:")
        
        if(senha === user){
            window.alert("[ERRO] A senha não pode ser igual o nome de usuário. Tente novamente!")
        } else {
            if(senha.length < 8) {
                window.alert("A senha precisa ter pelo menos 8 digitos. Tente novamente!")
            } else {
                window.alert("Usuário e senha cadastradas com sucesso!")
                break
            }
        }
    }
//}