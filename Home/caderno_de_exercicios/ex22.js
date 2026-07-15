//Crie uma função que receba dois parâmetros numéricos,
//  calcule o quadrado de cada um, some os
//resultados e retorne esse valor final
const leia = require("prompt-sync")();
let valores1 = leia("Digite um número: ");
let valores2 = leia("Digite segundo número: ");

function calcularQuadrado(valores1,valores2){
    let quadrado1 = valores1*valores1
    let quadrado2 = valores2*valores2
    let soma = quadrado1+ quadrado2
    return soma
    
}
let resultado = calcularQuadrado(valores1,valores2);
console.log("O resultado é ", resultado);