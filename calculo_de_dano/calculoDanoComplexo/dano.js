function Verificar(){
   let nameAtack = document.querySelector('#nameAtack')
   let pontosAtaque = document.querySelector('#pontosAtaque')
   let nameDefender = document.querySelector('#nameDefender')
   let pontosDefesa = document.querySelector('#pontosDefesa')
   let escudo = document.getElementsByName('escudo')
   if((nameAtack.value.length != 0 || pontosAtaque != 0) || (nameDefender != 0 || pontosDefesa != 0)){
      let dano = 0
      if(pontosAtaque > pontosDefesa || escudo[0].checked){
         dano = pontosAtaque - pontosDefesa
      }else if(pontosAtaque > pontosDefesa || escudo[1].checked){
         dano = (pontosAtaque - pontosDefesa)/2
      }
   }
}