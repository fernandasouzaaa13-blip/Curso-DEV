const leia = require("prompt-sync")()
let N = Number(leia("Digite um número: "))
let contador = 1
while(contador != N){
    console.log(contador)
    contador++
}

