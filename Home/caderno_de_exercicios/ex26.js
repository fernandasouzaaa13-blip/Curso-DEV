//Elabore uma função que receba um número e retorne um valor booleano ( true se for par, false se for ímpar).
const leia = require("prompt-sync")();
let teste = Number(leia("Digite um número: "));
 function TrueOuFalso( teste){
   if (teste % 2 === 0) {
  console.log("true");
} else {
  console.log("false");
}
    return teste
 }
 let resultado = TrueOuFalso(teste);
console.log("O número é: ",resultado)
