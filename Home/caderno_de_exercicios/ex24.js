//Construa uma função que receba três notas escolares como parâmetros e
//  retorne a média aritmética simples dessas notas.
const leia = require("prompt-sync")();
let nota1 = Number(leia("Digite a primeira nota: "));
let nota2 =Number( leia("Digite a segunda nota: "));
let nota3 = Number(leia("Digite a terceira nota: "));
function somarMedia( nota1,nota2,nota3){
    let soma = (nota1+nota2+nota3)/3;
    return soma
}
let resultado = somarMedia(nota1,nota2,nota3);
console.log("A média é:  ", resultado);