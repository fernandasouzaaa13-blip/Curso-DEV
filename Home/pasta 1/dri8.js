const carrinho = [
  {
    nome: "Caderno",
    preco: 12.5,
  },

  {
    nome: "Caneta",
    preco: 2.3,
  },

  {
    nome: "Mochila",
     preco: 89.9,
  },
];
let total= 0
for (let i = 0; i < carrinho.length;i++ ){
    total= total+carrinho[i].preco
}
console.log(`O total é ${total}`)