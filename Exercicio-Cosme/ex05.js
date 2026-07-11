
// Exercício 1 - Reutilização do código anterior
const conta = {
  titular: "Maria Fernanda",
  saldo: 500,
  extrato: [],
};
// Exercício 5 -return
function calcularSaldoFinal(saldo, valor) {
  return saldo + valor;
}
console.log("\x1b[34m====================\x1b[0m");
console.log(
  "\x1b[36m" +"O saldo total é: " + calcularSaldoFinal(conta.saldo, 100.00 ) + "\x1b[0m",);
console.log("\x1b[34m====================\x1b[0m");