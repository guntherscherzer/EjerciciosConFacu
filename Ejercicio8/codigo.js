let numero = Number(prompt("igrese el numero que quiere factorizar"))
let resul = 1
    for (let i = numero; i > 0; i--){
        resul *= i;       
    }
console.log(resul);