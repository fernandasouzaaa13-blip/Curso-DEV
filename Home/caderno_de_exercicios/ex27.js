const leia = require("prompt-sync")();
let n1 = Number(leia("Digite o primeiro número: "));
let n2 = Number(leia("Digite o segundo número: "));
const multiplicacao =(n1,n2) =>{
    return n1*n2;
}
let resultado =multiplicacao(n1,n2);
console.log("O resultado: ",resultado)