let num = document.getElementById('txtn')
let lista = document.getElementById('vlista')
let resultado = document.getElementById('res')

let valores = []

function isNumero(n) { //Função criada para executar outra função fornecendo "True" ou "False"
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){ 
        // indexOf() ele é um método, ele recebe um valor dentro dos parenteses.
        // Se o valor 'n' estiver dentro da 'l=lista' o indexOf retorna 0(ou mais), que é diferente != -1. Logo a function retornara true.
        // Porém, se você observar abaixo, o 'inLista' dentro da 'function adicioniar' tem uma '!' na frente. Isso causara o resultado contrário.
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { 
        //"!inLista" a exclamação serve para negar o resultado.
        // Observe que os parametro digitados dentro da function são representados pelas letras dentro da function principal.
        // "n" vira "numero.value" e "l,n" vira "numero.value, valores" 
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.` // "item.text" = meu item terá o valor "text"(string)
        lista.appendChild(item) // Será o appendChild serve para adicionar um elemento filho no elemento pai. lista <- item
        resultado.innerHTML = '' // Ele ira limpar o elemento "resultado" cada vez que você clicar no "Adicionar" e depois no "Finalizar"

    } else { 
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //Ele zera o input "num".
    num.focus() // O método "focus()" faz com que o navegador, automaticamente, seleciona o input para que você digite outro valor.
}
function finalizar(){
    if(valores.length == 0){  // O '.length' ira ler quantos elementos tem no vetor(array).
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let total = valores.length
        let maior = valores[0] //Ela precisa de um ponto para iniciar, por isso colocamos o índice 0. Esse é o ponto de partida para o "for in" rodar
        let menor = valores[0] // Se você quer descobrir qual é o maior e o menor número, você precisa começar comparando com alguma coisa. 
        let soma = 0
        let media = 0
        // Então pegamos o primeiro número (no caso, 8) como referência inicial.
        
        // for = para// in = em-
        for(let pos in valores){//O [pos] vai rodar todos os objetos do vetor.
            soma += valores[pos]
            
            if(valores[pos] > maior)  // A cada vez que o [pos] roda ele muda os valores, por isso ele fazer a comparação com todos os objetivos do array.
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }   //Observe que esses "if" não fecharam com {}chaves.
        media = Number.parseInt(soma / total) //O Number.parseInt() irá transformar o resultado em número inteiro.
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>` 
        // O += é o mesmo que "resultado.innerHTML" + "Ao todo...". É a concatenação com operador de atribuição. Serve para simplificar o código.
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}