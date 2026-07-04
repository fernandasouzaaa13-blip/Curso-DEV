// Array de funcionários
const funcionarios = [
    { nome: "Alice", setor: "TI" },
    { nome: "Bob", setor: "RH" },
    { nome: "Carlos", setor: "TI" }
];

// Filtrando apenas funcionários do setor TI
const ti = funcionarios.filter(funcionario => funcionario.setor === "TI");

// Exibindo o resultado
console.log(ti);