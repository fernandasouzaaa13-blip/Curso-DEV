//Dado um array de itens de estoque em JSON (com nome, preço e quantidade), desenvolva um script que 
// percorra a lista e gere um relatório exibindo apenas itens com estoque zerado
const Eletros = [
  {
    nome: "Garmin",
    preco: 5000,
    quantidade: 10,
  },
  {
    nome: "Secador",
    preco: 250,
    quantidade: 0,
  },
  {
    nome: "Televisão",
    preco: 60,
    quantidade: 100,
  },
];

let zerados = [];
Eletros.forEach((eletric) => {
  if (eletric.quantidade === 0) {
    zerados.push(eletric);
  }
});
console.log("exibindo apenas itens com estoque zerado: ");
for (let i = 0; i < zerados.length; i++) {
  console.log(zerados[i]);
}
