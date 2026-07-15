const leia = require("prompt-sync")()

let dia = Number(leia("Digite o dia da semana: "))

switch(dia){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Dia útil")
        break
    case 0:
    case 6:
        console.log("Fim de semana")
        break
    default:
        console.log("Dia inválido")
}