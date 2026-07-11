// Exercício 10  Procedimento
// Reutilização do código anterior
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
function exibirItemCardapio(nome, preco) {
  console.log("\x1b[33mnome: " + nome + "\x1b[0m" + "\n\x1b[32mpreco: " + preco + "\x1b[0m");
}
for (let menu of cardapio){
    exibirItemCardapio(menu.nome, menu.preco);
}
