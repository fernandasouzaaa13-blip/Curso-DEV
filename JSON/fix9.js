// Array de alunos
const alunos = [
    { nome: "Lucas", nota: 8 },
    { nome: "Maria", nota: 6 },
    { nome: "Pedro", nota: 9 }
];

// Criando um array apenas com os nomes
const nomes = alunos.map(aluno => aluno.nome);

// Exibindo o resultado
console.log(nomes);