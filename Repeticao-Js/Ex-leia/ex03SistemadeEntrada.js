const leia = require("prompt-sync")()
let altura = leia("Digite sua altura: ")


if (altura>=1.40){
    console.log("Pode entrar sozinho")
}
if (altura >= 1.20 && altura <= 1.39) {
  console.log("Pode entrar acompanhado")
}
if (altura < 1.20) {
  console.log("Não pode entrar")
  }