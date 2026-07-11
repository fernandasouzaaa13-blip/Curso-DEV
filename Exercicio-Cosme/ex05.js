
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

// Exercício 4
conta.extrato.push({
  tipo: "deposito",
  valor: 100,
  data: "05/07/2026",
});
console.log("\x1b[35mMovimentação adicionada!\x1b[0m");
console.log("===============================");
// Exercício 5 -return
function calcularSaldoFinal(saldo, valor) {
  return saldo + valor;
}

console.log(
  "\x1b[36m" +"O saldo total é: " + calcularSaldoFinal(conta.saldo, conta.extrato[0].valor) + "\x1b[0m",);
console.log("===============================");