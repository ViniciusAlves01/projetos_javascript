const average = (...numbers) => {
   return numbers.reduce((acum, nextNumber) => acum + nextNumber, 0) / numbers.length
} 
console.log('Média aritimética: ' + average(52,63,35,14,28,23))

const weightedAverage = (...obj) => {
   const multiply = obj.reduce((acum, nextElement) => acum + (nextElement.n*(nextElement.p ?? 1)), 0)//Uso pratico para o operador '??'
   const weightSum = obj.reduce((acum, nextElement) => acum + (nextElement.p ?? 1), 0)//Uso pratico para o operador '??'
   return multiply/weightSum
}
console.log('Média aritimética ponderada: ' + weightedAverage({n: 10, p:2}, {n: 20}, {n: 32}, {n: 89}))

const median = (...numbers) =>{
   const orderedNumbers = [...numbers]
   orderedNumbers.sort((a,b) => a-b)//Ordenando o conjunto em ordem crescente
   //Pegando os dois valores do centro do conjunto em caso de número de elementos par
   const n1 = orderedNumbers[(orderedNumbers.length/2)-1]
   const n2 = orderedNumbers[orderedNumbers.length/2]
   //Condição para saber se o número é impar ou par, sendo par calcula a media entre os dois valores do centro. Sendo ímpar pega o único valor do centro do conjunto.
   return (orderedNumbers.length%2 == 0) ? average(n1,n2) : orderedNumbers[(orderedNumbers.length-1)/2]
}
console.log(`Mediana: ${median(3,6,7,9,6,8,2,21)}`)

const mode = (...numbers) => {
    // [ [n, qtd], [n, qtd], [n, qtd] ]
   const quantities = numbers.map(number => [
      number,
      numbers.filter(n => number === n).length
   ])
   quantities.sort((a,b) => b[1]-a[1])
   return quantities[0][0]
}
console.log(`Moda: ${mode(4,1,8,5,2,3,1,7,3,9,4,3,2,3,0,3)}`)