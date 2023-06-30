

function Calcular(){
   let carro1 = (document.querySelector('#carro1'))
   let carro2 = (document.querySelector('#carro2'))
   let txtRes = document.querySelector('#txtRes')
   if(carro1.value.length !=0 || carro2.value.length != 0){
      if(carro1.value > carro2.value){
         txtRes.innerHTML = 'O Primeiro Carro está mais rapido'
      }else if(carro2.value > carro1.value){
         txtRes.innerHTML = 'O Segundo Carro está mais rapido'
      }else{
         txtRes.innerHTML = 'Os dois Carros estão na mesma velocidade'
      }
   }else{
      alert('Insira os dados corretamente!')
   }

}
