var num = [1,2,3]
//Coloca-se valores no vetor de 2 forma a baixo referida
num [3]=6
//Push tende a ser a mais facil
num.push(8)

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[4]}`)
console.log(`O vetor tem os seguintes valores ${num.sort()}posições`)

//Vetor com estrutura de repetição
for (let pos =0; pos <num.length; pos++) {
    
    console.log( `A posição ${pos} tem o valor ${num[pos]}`)
}



//Essa forma só funciona para Array e Objectos
//Simplificando do codigo acima
  for(let pos in num){
    console.log(`Opção ${num[pos]}`)
}

//Para procurarmos um valor  
let j = 2
let dos = num.indexOf(j)
if (dos == -1) {
    console.log('O valor não foi encontrado')
    
}else{
console.log(`O valor esta na posição ${dos}`)}