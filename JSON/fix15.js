// Array de alunos
const turma = [
    { nome: "Rafaela", nota: 9 },
    { nome: "Diego", nota: 4 },
    { nome: "Luana", nota: 7 }
];

// Filtrando apenas os aprovados
const aprovados = turma.filter(aluno => aluno.nota >= 6);

// Criando um novo array com nome e situação
const resultado = aprovados.map(aluno => ({
    nome: aluno.nome,
    situacao: "Aprovado"
}));

// Convertendo para JSON
const json = JSON.stringify(resultado);

// Exibindo o resultado
console.log(json);