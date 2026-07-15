const leia = require("prompt-sync")()

let nota1 = Number(leia("Digite a primeira nota: "))
let nota2 = Number(leia("Digite a segunda nota: "))
let media = (nota1 + nota2) / 2
console.log("Média:", media)
if (media >= 6) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}