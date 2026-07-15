const leia = require("prompt-sync")()
let numero = leia("Digite um número: ")
if (numero % 2==0){
    console.log("PAR")
}
else{
       console.log("IMPAR") 
    }
