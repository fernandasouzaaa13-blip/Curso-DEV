// Exercício 5 -return
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