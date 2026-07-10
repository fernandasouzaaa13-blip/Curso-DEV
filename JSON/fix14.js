// Objeto da escola
const escola = {
    nome: "SENAC",
    cidade: "Lavras",
    alunos: 200
};

// Convertendo para JSON com indentação de 2 espaços
const texto = JSON.stringify(escola, null, 2);

// Exibindo no console
console.log(texto);