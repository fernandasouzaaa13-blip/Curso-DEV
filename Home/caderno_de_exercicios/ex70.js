const leia = require("prompt-sync")();

let idade = Number(leia("Digite sua idade: "));
let renda = Number(leia("Digite sua renda: "));
let parcela = Number(leia("Digite a parcela desejada: "));

if (idade < 21 || idade >= 65) {
  console.log("Emprestimo reprovado, idade fora da faixa.");
} else if (renda < 3000) {
  console.log("Emprestimo reprovado, renda não atingida");
} else if (parcela > renda * (30 / 100)) {
  console.log("Emprestimo reprovado, Parcela maior que 30% da renda");
}else{
    console.log("Emprestimo aprovado")
}
