const leia = require("prompt-sync")()
let nome = leia ("Digite seu nome: ")
let idade = Number(leia("Digite sus idade: "))
console.log(`Olá, ${nome}! Você tem ${idade} anos.`)