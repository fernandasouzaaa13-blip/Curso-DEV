import readline from "readline-sync";
const nome = readline.question("Qual é seu nome? ")
console.log(`\x1b[33m Bem-vindo(a) ${nome}!\x1b[0m`);