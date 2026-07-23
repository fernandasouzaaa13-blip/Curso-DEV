const leia = require("prompt-sync")();

let salario = Number(leia("Digite seu salário: "));

// Função que calcula o valor do desconto
function desconto(salario) {
    return salario * (15 / 100);
}

// Guarda o valor do desconto
const valorDesconto = desconto(salario);

console.log("O valor do desconto é: R$", valorDesconto);

// Função que calcula o salário líquido
function valorTotalDoSalario(salario, desconto) {
    return salario - desconto;
}

// Guarda o salário após o desconto
const salarioLiquido = valorTotalDoSalario(salario, valorDesconto);

console.log("O salário líquido é: R$", salarioLiquido);