

const caixa = {
  nome: "Maria",
  saldo: 1000,
  saque: [],
  deposito: [],

  mostrarSaldo: function () {
    console.log(caixa.saldo);
  }
};

caixa.mostrarSaldo();