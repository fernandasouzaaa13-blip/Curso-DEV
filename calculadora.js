const readline= require("readline-sync");
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
menu(5, 3); //chama a função menu
//Lê a opção escolhida pelo usuaário
let opcao;
opcao= Number(readline.question("Escolha uma opção"));



somar(10, 3); //chama a função somar
subtrair(5, 2); //chama a função subtrair
multiplicar(5, 5); //chama a função multiplicar
dividir(10, 2); //chama a função dividir
