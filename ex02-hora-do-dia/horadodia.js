function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var texto = document.querySelector('#texto')
    texto.innerHTML = `${agora}`
    if(hora < 12){
        document.body.style.background = '#C3D3DE'
        var titulo = document.getElementsByTagName('h1')[0]
        titulo.style.color = '#1a1a1a'
        var img = document.getElementById('img')
        img.src = 'img/manha.jpg'
    }else if(hora <= 18){
        document.body.style.background = '#C18945'
        var img = document.getElementById('img')
        img.src = 'img/tarde.jpg'
    }else{
        document.body.style.background = '#17274B'
        var img = document.getElementById('img')
        img.src = 'img/noite.jpg'
    }
}