const leia = require("prompt-sync")()
let numero = leia("Digite um número: ")

if (numero>0){
    console.log('Esse número é Positivo')
}
if (numero<0){
    console.log('Esse número é Negativo')
}
if (numero==0){
    console.log('Esse número é Zero')
}