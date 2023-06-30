function calcular(){
    var txtv = document.querySelector('#txtv')
    var velocidade = Number(txtv.value)
    res = document.querySelector('#res')
    if(velocidade > 60){
        res.innerHTML = `Sua velocidade é de <strong>${velocidade}Km/h</strong>.<br/> Você foi <strong>multado</strong> por excesso de velocidade.`
    }else{
        res.innerHTML = `Sua velocidade é de <strong>${velocidade}Km/h</strong>.`
    }
}
