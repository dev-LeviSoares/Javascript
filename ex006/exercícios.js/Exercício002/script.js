function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('datnas')
    var resultado = document.querySelector('div#resultado')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        resultado.innerHTML = `Idade calculada: ${idade}` 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (sexo[0].checked /*se o que estiver marcado*/) {
            genero = 'um homem'
            
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'menino-12.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'menino-21.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-50.png')
            } else {
                img.setAttribute('src','idoso-100.png')
            }
        } else if (sexo[1].checked) {
            genero = 'uma mulher'
            
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'menina-12.png')
                   
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-21.png')
                
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-50.png')
        
            } else {
                img.setAttribute('src', 'mulher-100.png')
                
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
        resultado.appendChild(img) // Coloca o elemento img na tela
    }
}