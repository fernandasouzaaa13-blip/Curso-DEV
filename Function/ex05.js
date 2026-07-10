// Função que calcula a idade de uma pessoa
function calcularIdade(anoNascimento) {
    // Calcula a idade subtraindo o ano de nascimento do ano atual
    let idade = 2026 - anoNascimento;

    // Retorna a idade calculada
    return idade;
}
// Exibe a idade da pessoa que nasceu em 2003
console.log("Sua idade é " + calcularIdade(2003) + " anos");