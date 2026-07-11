// Exercício 4
const conta = {
  titular: "Maria Fernanda",
  saldo: 500,
  extrato: [],
};
conta.extrato.push({
  tipo: "deposito",
  valor: 100,
  data: "05/07/2026",
});
console.log("\x1b[34m========================\x1b[0m");
console.log("\x1b[35mMovimentação adicionada!\x1b[0m");
console.log("\x1b[34m========================\x1b[0m");