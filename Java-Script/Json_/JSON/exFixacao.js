const alunos = [
  {
    nome: "Lucas",
    idade: 15,
    cpf: "111.111.111 = 11",
    cidade: "Curitiba",
    estado: "PR",
  },
  {
    nome: "Fernanda",
    idade: 17,
    cpf: "222.222.222=22",
    cidade: "Recife",
    estado: "PE",
  },
  {
    nome: "Rafael",
    idade: 16,
    cpf: "333.333.333=33",
    cidade: "Curitiba",
    estado: "PR",
  },
  {
    nome: "Camila",
    idade: 18,
    cpf: "444.444.444=44",
    cidade: "Salvador",
    estado: "BA",
  },
];
// Filtra os alunos que moram no estado "PB"
const alunosPB = alunos.filter((aluno) => aluno.estado === "PB");
// Exibe no console os alunos encontrados
console.log(alunosPB);
// Mostra o tipo de dado retornado pelo filter()
console.log(typeof alunosPB);

// Procura o primeiro aluno com o nome "Fernanda"
const aluna = alunos.find((aluno) => aluno.nome === "Fernanda");
// Exibe a aluna encontrada
console.log(aluna);
// Mostra o tipo de dado retornado pelo find()
console.log(typeof aluna);
