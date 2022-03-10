function p_i(n) {
    if (n%2==0) {
        return 'Par'
    }else{
        return 'impar'
    }
}

console.log( p_i(3))
console.log(br = p_i(5))
let bro = p_i(4)
console.log(bro)


//function some(n1,n2) atribuicão de valor

function some(n1=0,n2=0) {
    return n1 + n2
}
console.log(some(1))


//colocar função na variavel
let n = function(x) {
     return x*2
}
console.log(n(5))

function factorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *=c
        
    }
    return fat
}
console.log(factorial(5))


//Maneira Recursiva

 function fatorial(m) {
     if (m==1) {
         return 1
     }else{
         return m * fatorial(m-1)
     }
 }
 console.log(fatorial(5))