const leia = require("prompt-sync")()

let opcao = Number(leia("Digite uma opção de 1 a 4: "))

switch(opcao){

    case 1:
        console.log("Cadastrar")
        break

    case 2:
        console.log("Listar")
        break

    case 3:
        console.log("Editar")
        break

    case 4:
        console.log("Sair")
        break

    default:
        console.log("Opção inválida")
}