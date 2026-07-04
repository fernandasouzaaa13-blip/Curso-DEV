const leia = require("prompt-sync")()
let peso = leia("Digite seu peso: ")
let altura = leia("Digite sua altura: ")

let imc = peso / (altura * altura)
console.log("Seu imc é: " + imc.toFixed(2))

if (imc < 18.5) {
  console.log("Abaixo do peso")
}
if (imc >= 18.5 && imc <= 24.9) {
  console.log("Peso Normal");
}
if (imc >= 25 && imc <= 29.9) {
  console.log("Sobrepeso")
}
if (imc >= 30 && imc <= 34.9) {
  console.log("Obesidade Grau 1")
}
if (imc >= 35 && imc <= 39.9) {
  console.log("Obesidade Grau 2")
}
if (imc >= 40) {
  console.log("Obesidade Grau 3 (Obesidade mórbida)")
}
