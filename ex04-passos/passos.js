function calcular(){
    var nInicio = document.querySelector('#inicio')
    var nFim = document.querySelector('#fim')
    var nPassos = document.querySelector('#passos')
    var res = document.querySelector('#res')
    if(nInicio.value.length == 0 || nFim.value.length == 0){
        alert('[ERRO!] Preencha os campos corretamente.')
        res.innerHTML= 'Impossível contar.'
    }else{
        var inicio = Number(nInicio.value)
        var fim = Number(nFim.value)
        var passos = Number(nPassos.value)
        res.innerHTML = 'Contando:</br>'
        if(passos <= 0){
            alert('Passos inválidos. Considerando Passos por vez: 1')
            passos = 1
        }
        if(inicio <  fim){
            for(var c = inicio; c <= fim; c += passos){ 
                res.innerHTML += ` ${c} \u{1F449}`
            }    
        }else{
            for(var c = inicio; c >= fim; c -= passos){ 
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
    }res.innerHTML += ` \u{1F3C1}`
}