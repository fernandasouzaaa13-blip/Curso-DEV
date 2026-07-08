// Importa a biblioteca readline-sync para ler dados digitados pelo usuário
const readline = require("readline-sync");
// Cria um objeto chamado conta
const conta = {
    // Nome do titular da conta
    titular: "Maria Silva",
    // Saldo inicial da conta
    saldo: 500.00,
    // Array que vai armazenar o histórico de depósitos e saques
    extrato: []
};
// Função responsável por mostrar o menu na tela
function menu() {
    console.log("\n====================");
    // Mostra o título do menu
    console.log(" MENU DE OPÇÕES");
    console.log("====================");
    console.log("1 - Consultar saldo");
    console.log("2 - Depositar");
    console.log("3 - Sacar");
    console.log("4 - Ver extrato");
    console.log("0 - Sair");
    console.log("====================");
}
// Função responsável por mostrar o saldo da conta
function consultarSaldo(conta){
    // Exibe o saldo atual da conta
    console.log(`Saldo atual: R$ ${conta.saldo.toFixed(2)}`);
}
// Função responsável por realizar depósitos
function depositar(conta, valor){
    // Verifica se o valor digitado é maior que zero
    if(valor > 0){
        // Soma o valor ao saldo da conta
        conta.saldo += valor;
        // Adiciona uma movimentação ao extrato
        conta.extrato.push({
            // Tipo da movimentação
            tipo:"Depósito",
            // Valor depositado
            valor:valor
        });
        // Mostra uma mensagem de sucesso
        console.log("Depósito realizado com sucesso!");
    }else{
        // Caso o valor seja inválido, mostra uma mensagem de erro
        console.log("Valor inválido!");
    }
}
// Função responsável por realizar saques
function sacar(conta, valor){
    // Verifica se o valor é maior que zero
    if(valor > 0){
        // Verifica se existe saldo suficiente
        if(valor <= conta.saldo){
            // Diminui o valor do saldo
            conta.saldo -= valor;
            // Adiciona a movimentação ao extrato
            conta.extrato.push({
                // Tipo da movimentação
                tipo:"Saque",
                // Valor sacado
                valor:valor
            });
          // Mostra mensagem de sucesso
          console.log("Saque realizado com sucesso!");
        }else{
            console.log("Saldo insuficiente!");
        }
    }else{
        console.log("Valor inválido!");
    }
}
// Função responsável por mostrar o extrato
function exibirExtrato(conta){
    // Mostra um título
    console.log("\n===== EXTRATO =====");
    
    if(conta.extrato.length === 0){
    console.log("Nenhuma movimentação realizada.");
    }else{
        for(let movimento of conta.extrato){
            console.log(`${movimento.tipo} - R$ ${movimento.valor.toFixed(2)}`);
        }
    }
}
let opcao;
do{
    menu();
    opcao = readline.questionInt("Escolha uma opção: ");
    switch(opcao){
        case 1:
            consultarSaldo(conta);
            break;
        case 2:
            let valorDeposito = readline.questionFloat("Digite o valor do depósito: ");
            depositar(conta, valorDeposito);
    
            break;
        case 3:
            
            let valorSaque = readline.questionFloat("Digite o valor do saque: ");
            sacar(conta, valorSaque);
            break;
        case 4:
            exibirExtrato(conta);
           
            break;
        case 0:
            console.log("Programa encerrado!");
            break;
        // Caso o usuário digite qualquer outro número
        default:
            console.log("Opção inválida!");
    }
// Repete enquanto a opção for diferente de 0
}while(opcao != 0);