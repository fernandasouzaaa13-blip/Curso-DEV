console.log("===============================");
console.log("\n=== CARDÁPIO ===");
console.log("===============================");
// Exercício 1
const conta = {
  titular: "Maria Fernanda",
  saldo: 500,
  extrato: [],
};
console.log("\x1b[32mConta criada com sucesso!\x1b[0m");
console.log("===============================");
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
console.log("\x1b[34mCardápio criado!\x1b[0m");
console.log("===============================");
// Exercício 3
const pedido = {
  itens: [],
  tipoEntrega: "delivery",
  total: 45.0,
};
console.log("\x1b[33m" + pedido.tipoEntrega + "\x1b[0m");
console.log("===============================");

// Exercício 4
conta.extrato.push({
  tipo: "deposito",
  valor: 100,
  data: "05/07/2026",
});
console.log("\x1b[35mMovimentação adicionada!\x1b[0m");
console.log("===============================");

// Exercício 5
function calcularSaldoFinal(saldo, valor) {
  return saldo + valor;
}

console.log(
  "\x1b[36m" +
    "O saldo total é: " +
    calcularSaldoFinal(conta.saldo, conta.extrato[0].valor) +
    "\x1b[0m",
);
console.log("===============================");

// Exercício 6
function calcularPrecoComTaxa(preco, taxa) {
  return preco + taxa;
}
console.log(
  "\x1b[33m" +
    "Preço com Taxa: " +
    calcularPrecoComTaxa(pedido.total, 6.0) +
    "\x1b[0m",
);
console.log("===============================");

// Exercício 7
function dobrarValor(valor) {
  return valor * 2;
}
// cosme nessa funcao eu precisa alguma variavel do codigo ou eu poderia colocar algum valor aleatório assim como eu fiz
console.log("\x1b[35m" + "O dobro do valor é: " + dobrarValor(4.0) + "\x1b[0m");
console.log("===============================");

// Exercício 8
function calcularTroco(valorPago, valorTotal) {
  return valorPago - valorTotal;
}
console.log(
  "\x1b[32m" + "O Troco é: " + calcularTroco(100, pedido.total) + "\x1b[0m",
);
console.log("===============================");

// Exercício 8
function exibirSaldo(saldo) {
  console.log("\x1b[31m" + "Seu saldo é: R$ " + saldo + "\x1b[0m");
}
exibirSaldo(conta.saldo);
console.log("===============================");

// Exercício 9
function exibirItemCardapio(nome, preco) {
  console.log("\x1b[31m" + "nome:  " + nome + "preco: " + preco + "\x1b[0m");
}

// Exercício 10
function exibirMensagemBoasVindas(nomeCliente) {
  console.log("\x1b[31m" + "Bem-vindo(a) " + nomeCliente + "\x1b[0m");
}

// Exercício 11
function avisarSaldoInsuficiente() {
  console.log(
    "\x1b[31m" + "Saldo insuficiente para essa operação." + "\x1b[0m",
  );
}
console.log("O nome de cada item é : ");
for (let i = 0; i < cardapio.length; i++) {
  console.log("\x1b[33m" + cardapio[i].nome + "\x1b[0m");
}

// Exercício 12
