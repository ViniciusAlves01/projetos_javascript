function addPlayer(){
   const position = document.getElementById('position').value
   const name = document.getElementById('name').value
   const number = document.getElementById('number').value
   

   const playersList = document.getElementById('playersList')
   const playerItem = document.createElement('li')
   playerItem.id = 'player-' + number
   playerItem.innerText = `${position} - ${name} - ${number}`

   playersList.appendChild(playerItem)

   document.getElementById('position').value = ''
   document.getElementById('name').value = ''
   document.getElementById('number').value = ''
}

function removePlayer(){
   const number = document.getElementById('numberToRemove').value
   const playerToRemove = document.getElementById('player-' + number)

   //document.getElementById('playersList').removeChild(playerToRemove) Utilizando o elemento pai
   playerToRemove.remove() //Utilizando o proprio elemento
   document.getElementById('numberToRemove').value = ''
}