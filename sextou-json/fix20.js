// Criando o array de funcionários.
const funcionarios = [
    { nome: "Alice", salario: 1800 },
    { nome: "Carlos", salario: 3200 },
    { nome: "Fernanda", salario: 4500 },
    { nome: "João", salario: 2500 }
];

// filter seleciona apenas quem possui salário
// maior que R$3.000.
const salarioAlto = funcionarios.filter(funcionario => funcionario.salario > 3000);

// map cria um novo array de objetos.
// Cada objeto terá apenas duas propriedades:
// nome e situação.
const resultado = salarioAlto.map(funcionario => {
    return {
        nome: funcionario.nome,
        situacao: "Salário Alto"
    };
});

// Convertendo o array de objetos para JSON.
const json = JSON.stringify(resultado);

// Exibindo o JSON.
console.log(json);

// Verificando o tipo da variável.
// Como JSON.stringify retorna texto,
// o resultado será "string".
console.log(typeof json);