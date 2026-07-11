const conta = {
  titular: "Maria Fernanda",
  saldo: 500,

  extrato: [
    {
      tipo: "deposito",
      valor: 520,
      data: "05/07/2026",
    },
    {
      tipo: "saque",
      valor: 200,
      data: "05/07/2026",
    },

    {
      tipo: "deposito",
      valor: 7000,
      data: "05/07/2026",
    },
  ],
};
function avisarSaldoInsuficiente() {
  console.log("\x1b[31m" + "Saldo insuficiente para essa operação." + "\x1b[0m",
  );
}
const saque = 100;
if (saque > conta.saldo) {
  avisarSaldoInsuficiente();
}else{
    console.log("\x1b[32mSaque autorizado\x1b[0m")
}
