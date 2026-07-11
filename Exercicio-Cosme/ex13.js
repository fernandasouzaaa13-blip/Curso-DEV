// Exercício 13  Laços de Repetição
// Exercício 2
const cardapio = [
  {
    nome: "Hambúrguer",
    preco: 25,
  },
  {
    nome: "Batata Frita",
    preco: 15,
  },
  {
    nome: "Refrigerante",
    preco: 8,
  },
];
console.log("===============================");
// Exercício 13  Laços de Repetição

console.log("\x1b[32mO Nome de cada item é : \x1b[0m");
for (let i = 0; i < cardapio.length; i++) {
  console.log("\x1b[34m" + cardapio[i].nome + "\x1b[0m");
}