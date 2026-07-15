const leia = require("prompt-sync")()
let nome = leia ("Digite seu nome: ")
let idade = Number(leia("Digite sua idade: "))
if (idade>=18){
console.log(`Olá, ${nome}! Você tem ${idade} anos, Maior de Idade`)
}
else{
console.log(`Olá, ${nome}! Você tem ${idade} anos, Menor de idade`)
}