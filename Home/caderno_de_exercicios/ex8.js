const leia = require("prompt-sync")();
let numero = leia("Digite um número: ");
if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}
