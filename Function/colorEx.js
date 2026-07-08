import readline from "readline-sync";
console.log("\x1b[36m ====================\x1b[0]");
console.log("\x1b[32m SISTEMA BANCÁRIO \x1b[0]");
console.log("\x1b[36m ====================\x1b[0]");

const nome = readline.question("Digite seu nome: ");
console.log(`\x1b[33m Bem-vindo(a) ${nome}!\x1b[0]`);
console.log("\x1b[32m Operação realizada com sucesso!\x1b[0]");
