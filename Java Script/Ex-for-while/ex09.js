const leia = require("prompt-sync")();
let numero = Number(leia("Digite um número:"));
let contador = 1;

while (contador <= 10) {
    console.log(numero, " x ", + contador, " = ", (numero * contador));
    contador++;
}