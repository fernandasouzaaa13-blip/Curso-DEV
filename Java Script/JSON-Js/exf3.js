// Lista inicial de alunos
const alunos = [
    {
        id: 1,
        nome: "Ana",
        idade: 16,
        turma: "2º A"
    },
    {
        id: 2,
        nome: "Carlos",
        idade: 17,
        turma: "2º B"
    },
    {
        id: 3,
        nome: "Mariana",
        idade: 15,
        turma: "1º A"
    }
];

// ===============================
// Função para cadastrar um aluno
// ===============================
function cadastrarAluno(novoAluno) {

    // Procura se já existe um aluno com o mesmo id
    const indice = alunos.findIndex(aluno => aluno.id === novoAluno.id);

    // Se encontrou, não cadastra
    if (indice !== -1) {
        console.log("Aluno já cadastrado.");
    } else {
        // Se não encontrou, adiciona ao final do vetor
        alunos.push(novoAluno);
        console.log("Aluno cadastrado com sucesso!");
    }
}

// Cadastro de um novo aluno
const novoAluno = {
    id: 4,
    nome: "João",
    idade: 16,
    turma: "2º C"
};

cadastrarAluno(novoAluno);

// ===================================
// Localizar o aluno de id 2
// ===================================
const indiceAluno2 = alunos.findIndex(aluno => aluno.id === 2);

console.log("Índice do aluno de id 2:", indiceAluno2);

// ===================================
// Remover o aluno de id 1
// ===================================
const indiceAluno1 = alunos.findIndex(aluno => aluno.id === 1);

if (indiceAluno1 !== -1) {
    alunos.splice(indiceAluno1, 1);
}

// ===================================
// Remover a propriedade turma do aluno de id 3
// ===================================
const indiceAluno3 = alunos.findIndex(aluno => aluno.id === 3);

if (indiceAluno3 !== -1) {
    delete alunos[indiceAluno3].turma;
}

// ===================================
// Quantidade de alunos cadastrados
// ===================================
console.log("Quantidade de alunos:", alunos.length);

// ===================================
// Lista final de alunos
// ===================================
console.log(alunos);