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
const deposito = 100
if(deposito <= 0 ){
    console.log("\x1b[31mValor inválido\x1b[0m");
}else{
    console.log("\x1b[32mDepósito realizado\x1b[0m");
}