function calcular(){
    let num = document.querySelector('#numero')
    let res = document.querySelector('#res')
    res.innerHTML = ''
    if(num.value.length == 0){
        alert('[ERRO] Digite um número para prosseguir')
        res.innerHTML = 'Digite um número acima...'
    }else{
        let n = Number(num.value)
        for(let i = 1; i <= 10; i++){
            res.innerHTML += `${n} X ${i} = ${n*i}</br>`
        }
    }
}