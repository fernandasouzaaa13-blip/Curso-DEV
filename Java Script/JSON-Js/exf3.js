// Criando o array de produtos.
const alunos = [
    {
        id: 1,
        nome: "Ana",
        idade: 16,
        estoque:"2 A"
    },
    {
        id: 2,
        nome: " Carlos",
        idade: 17,
        estoque:"2 B"
    },
   {
        id: 3,
        nome: "Mariana",
        idade: 15,
        estoque:"1 A"
    },
];
function cadastrarAluno(alunos, novoAluno) {
estoque .push (novoluno);
console. log("Aluno cadastrado com sucesso!");
console. log(novoAluno);
}
function encontrarIndice(alunos, id) {
const indice = alunos.findIndex(aluno=> aluno.id === 2);
console. log(`Índice encontrado para o ID ${id}:', indice);
}
