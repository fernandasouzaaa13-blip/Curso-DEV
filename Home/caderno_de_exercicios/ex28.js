const leia = require("prompt-sync")();
let nome =(leia("Digite seu primeiro nome: "));
let sobrenome = (leia("Digite seu sobrenome: "));
function NomeCompleto( nome,sobrenome){
    return nome + sobrenome
}
let resultado =  NomeCompleto(nome,sobrenome);
console.log("Seu nome é :", resultado.toUpperCase())