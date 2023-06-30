function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear() //consulta do ano atual
    var anofor = document.querySelector('#ano') //ano que vem do form
    var res = document.querySelector('#texto') //texto aonde estará o resultado
    if(anofor.value.length == 0 || anofor.value > anoatual){ // verifica se a caixa de texto é válida
        alert('ERRO. Verifique os dados e tente novamente.')
    }else{
        var idade = anoatual-anofor.value //calcula a idade com base no ano informado
        var sexo = document.getElementsByName('genero') //coleta o valor do input radio
        var genero = ''
        var tipop = '' //variavel para guardar o tipo de pessoa
        var img = document.querySelector('#img') 
        if(sexo[0].checked){ //condição para verificação de genero masculino
            genero = 'Masculino'
            if(idade > 0 && idade <5){
                tipop = 'um bebê'
                img.src = 'img/bebem.jpg' // inserção da imagem
                img.style.display = 'block'
            }else if(idade > 5 && idade < 15){
                tipop = 'uma criança'
                img.src = 'img/criancam.jpg'
                img.style.display = 'block'
            }else if(idade > 15 && idade < 20){
                tipop = 'um adolescente'
                img.src = 'img/adolescentem.jpg'
                img.style.display = 'block'
            }else if( idade > 20 && idade < 30){
                tipop = 'um jovem adulto'
                img.src = 'img/jovemadultom.jpg'
                img.style.display = 'block'
            }else if(idade > 30 && idade < 40){
                tipop = 'um adulto'
                img.src = 'img/adulto.jpg'
                img.style.display = 'block'
            }else if(idade > 40 && idade < 60){
                tipop = 'um adulto velho'
                img.src = 'img/adultovelho.jpg'
                img.style.display = 'block'
            }else if(idade >= 60){
                tipop = 'um idoso'
                img.src = 'img/velho.jpg'
                img.style.display = 'block'
            }
        }else if(sexo[1].checked){ //condição para verificação de genero feiminino
            genero = 'Feiminino'
            if(idade > 0 && idade <5){
                tipop = 'uma bebê'
                img.src = 'img/bebe.jpg'
                img.style.display = 'block'
            }else if(idade > 5 && idade < 15){
                tipop = 'uma criança'
                img.src = 'img/crianca.jpg'
                img.style.display = 'block'
            }else if(idade > 15 && idade < 20){
                tipop = 'uma adolescente'
                img.src = 'img/adolescente.jpg'
                img.style.display = 'block'
            }else if( idade > 20 && idade < 30){
                tipop = 'uma jovem adulta'
                img.src = 'img/jovemadulta.jpg'
                img.style.display = 'block'
            }else if(idade > 30 && idade < 40){
                tipop = 'uma adulta'
                img.src = 'img/adulta.jpg'
                img.style.display = 'block'
            }else if(idade > 40 && idade < 60){
                tipop = 'uma adulta velha'
                img.src = 'img/adultavelha.jpg'
                img.style.display = 'block'
            }else if(idade >= 60){
                tipop = 'uma idosa'
                img.src = 'img/velhaf.jpg'
                img.style.display = 'block'
            }
        }
    }
    res.innerHTML = `Indentificamos ${tipop} do genero ${genero} com ${idade} anos.` //exibe o texto após o acionamento do botão
}