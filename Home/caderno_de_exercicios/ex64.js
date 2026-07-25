const leia = require("prompt-sync")();

let nota1 = Number(leia("Digite sua nota 1: "));
let nota2 = Number(leia("Digite sua nota 2: "));
let nota3 = Number(leia("Digite sua nota 3: "));
let media = 0;
media = (nota1 + nota2 + nota3) / 3;

if (media >= 7.0) {
  console.log("Aprovado");
} else if (media >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
