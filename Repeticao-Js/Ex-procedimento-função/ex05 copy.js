// Função que calcula a idade de uma pessoa
function calcularIdade(anoNascimento) {
  // Calcula a idade subtraindo o ano de nascimento do ano atual

  const idade = 2026 - anoNascimento;

  // Retorna a idade calculada
  return idade;

}
const leia = require("prompt-sync")()
const idade = leia("Digite sua idade : ");

