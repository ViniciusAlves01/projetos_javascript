let num = document.querySelector('#numero')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let botao = document.querySelector('#botao2')
let vetor = []

function adicionar(){
    botao.style.display = 'block'
    lista.style.display = 'block'
    if(isNumero(num.value) && !inLista(num.value, vetor)){
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.innerHTML = `Número ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        res.style.display = 'none'
    }else{
        alert('Número inválido ou já adicionado.')
    }
    num.value = ''
    num.focus()
}

function isNumero(num){
    if(Number(num) >= 1 && Number(num) < 100){
        return true
    }else{
        return false
    }
}
function inLista(num, vetor){
    if(vetor.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}

function analizar(){
    res.style.display = 'block'
    res.innerHTML = `Ao todo, temos <strong>${vetor.length}</strong> números</br>`
    res.innerHTML += `O maior valor informado foi <strong>${max(vetor)}</strong></br>`
    res.innerHTML += `O menor valor informado foi <strong>${min(vetor)}</strong></br>`
    res.innerHTML += `A soma dos valores é igual à <strong>${soma(vetor)}</strong></br>`
    res.innerHTML += `A media dos valores informados é <strong>${media(vetor)}</strong></br>`
}
function max(v){
    let max = vetor[0]
    for(let i = 1;i < vetor.length; i++){
        if(max < vetor[i]){
            max = vetor[i]
        }
    }
    return max
}
function min(v){
    let min = vetor[0]
    for(let i = 1;i < vetor.length; i++){
        if(min < vetor[i]){
        }else{
            min = vetor[i]
        }
    }
    return min
}
function soma(v){
    let soma = vetor[0]
    for(let i = 1; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma
}
function media(){
    let soma = vetor[0]
    for(let i = 1; i < vetor.length; i++){
        soma += vetor[i]
    }
    let media = soma/vetor.length
    return media
}