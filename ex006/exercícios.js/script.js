function carregar() {
    var hora = document.getElementById(`msghoras`)
    var fotos = document.getElementById(`foto`)
    var data = new Date()
    var hr = data.getHours()
    
    msghoras.innerHTML = `Agora são ${hr} horas`
    
    if (hr >= 0 && hr < 12) {
        fotos.src = 'dia.png'
        document.body.style.background = '#f5c453'
        document.querySelector('footer p').style.color = '#000000'
    } else if (hr >= 12 && hr < 18){
        fotos.src = 'tarde.png'
        document.body.style.background = '#fe8204'
    } else {
        fotos.src = 'noite.png'
        document.body.style.background = '#230f49ff'
    }
}