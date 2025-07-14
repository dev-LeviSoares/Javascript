var hagora = new Date()
var hora = hagora.getHours() //Puxa a hora do próprio sistema.
var saudação = 1

if (hora < 12 ) {
    var saudação = 'Bom dia'
} else if (hora < 17) {
    var saudação = 'Boa Tarde'
} else if (hora < 24) {
    var saudação = 'Boa noite'
} else {
    var saudação = 'Bora'
}

console.log(`${saudação}, Magnata. Vamos levantar. Agora são exatamente ${hora} horas`)

