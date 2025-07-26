function Tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')
    

    if (num.value.length == 0) {
        res.innerHTML = 'Impossível calcular!'
        window.alert('[ERRO] Digite um número!')
        tab.innerHTML = ''
    } else {
        let n = Number(num.value)
        let contador = 1
        tab.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
            contador++
        }
    }
}