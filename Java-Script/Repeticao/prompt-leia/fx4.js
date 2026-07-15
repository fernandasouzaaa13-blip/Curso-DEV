const leia = require("prompt-sync")()
let numero = leia("Digite um número: ")

if (numero>0){
    console.log('Esse número é Positivo')
}
else 
    if (numero<0){
    console.log('Esse número é Negativo')
}
else{
    console.log('Esse número é Zero')
}