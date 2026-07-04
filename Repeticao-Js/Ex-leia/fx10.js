const leia = require("prompt-sync")()

let salario = Number(leia("Digite o salário: "))
let novoSalario

if (salario <= 1000) {
    novoSalario = salario + (salario * 15 / 100)
} else {
    novoSalario = salario + (salario * 10 / 100)
}

console.log("Novo salário:", novoSalario)