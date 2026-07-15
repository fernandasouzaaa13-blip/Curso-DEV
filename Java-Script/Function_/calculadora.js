const readline = require("readline-sync");
//-----------------------------------------
// Função responsável por exibir o menu
//-----------------------------------------
function menu() {
  console.log("\n ====================");
  console.log(" Calculadora");
  console.log("====================");
  console.log("1- Somar");
  console.log("2- Subtrair");
  console.log("3- Multiplicar");
  console.log("4- Dividir");
  console.log("5- Sair");
  console.log("====================");
}

function somar(a, b) {
  console.log("Função de somar executada");
  let soma = a + b;
  console.log(`O resultado da soma é: ${soma}`);
  console.log("\n ====================");
}
function subtrair(a, b) {
  console.log("Função de subtrair executada");
  let subtrair = a - b;
  console.log(`O resultado da subtração é: ${subtrair}`);
  console.log("\n ====================");
}

function multiplicar(a, b) {
  console.log("Função de multplicar executada");
  let multiplicar = a * b;
  console.log(`O resultado da multiplicação é: ${multiplicar}`);
  console.log("\n ====================");
}

function dividir(a, b) {
  console.log("Função de dividir executada");
  let dividir = a / b;
  console.log(`O resultado da divisão é: ${dividir}`);
  console.log("\n ====================");
}
//*********************
//Aplicativo princípal
//*********************
//chama a função
menu(); //chama a função menu
//Lê a opção escolhida pelo usuário
let opcao;
opcao = Number(readline.question("Escolha uma opção"));

do {
  menu();
  opcao = readline.questionInt("Escolha uma opção: ");
  // Caso o usuario escolha sair, encerra o programa
  if (opcao === 5) {
    console.log("\nPrograma encerrado.");
    break;
  }
  // Solicita os dois numeros apenas se a opção for válida
  if (opcao >= 1 && opcao <= 4) {

    const numero1 = Number(readline.question("Digite o primeiro numero: "));
    const numero2 = Number(readline.question("Digite o segundo numero: "));
    // Executa a operação escolhida
    switch (opcao) {
      case 1:
        somar(numero1, numero2);
        break;
      case 2:
        subtrair(numero1, numero2);
        break;
      case 3:
        multiplicar(numero1, numero2);
        break;
      case 1:
        dividir(numero1, numero2);
        break;
    }
  } else {
    console.log("Opção inválida.");
  }
} while (true)
