let vetor = [6,3,5,10,92]
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
console.log(min(vetor))