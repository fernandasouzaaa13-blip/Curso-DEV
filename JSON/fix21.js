const conta = {
  titular: "Maria Silva",
  saldo: 500.0,
  extrato: [],
};

function menu() {
  console.log("MENU");
  console.log(" 1 — Consultar saldo");
  console.log(" 2 — Depositar");
  console.log(" 3 — Sacar");
  console.log(" 4 — Ver extrato (histórico de movimentações");
  console.log(" 0 — Sair");
}
function consultarSaldo(conta) {
  console.log(`O valor do saldo é: ${conta.saldo}`);
}
function depositar(conta, valor) {
  if (valor <= 0) {
    console.log(`Valor inválido!`);
  } else {
    conta.saldo = conta.saldo + valor;
    conta.extrato.push({ tipo: "deposito", valor: valor, data: "01/07/2026" });
    console.log("Depósito realizado com sucesso!");
  }
}
function sacar(conta, valor) {
  if (valor < conta.saldo && valor > 0) {
    conta.saldo = conta.saldo - valor;
    conta.extrato.push({ tipo: "Saque", valor: valor, data: "01/07/2026" });
    console.log("Saque realizado com sucesso!");
  } else {
    console.log(`Não foi possível realizar o saque!`);
  }
}

function exibirExtrato(conta) {
  if (conta.extrato != []) {
    for (let movimentacao of conta.extrato) {
      console.log(movimentacao.tipo);
      console.log(movimentacao.valor);
      console.log(movimentacao.data);
      console.log("------------------");
    }
  }else{
    console.log("Não há movimentação no extrato")
  }
}
do { 

}while
