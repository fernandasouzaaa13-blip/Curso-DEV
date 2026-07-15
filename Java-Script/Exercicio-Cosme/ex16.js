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
 console.log("\x1b[36m=====================\x1b[0m");;
let soma = 0 
for (let i = 0; i < cardapio.length; i++) {
    soma = soma + cardapio[i].preco;
}
 console.log("\x1b[35m" +" O valor total é: " + soma + "\x1b[0m");
 console.log("\x1b[36m=====================\x1b[0m");