const alunos = [
  {
    nome: "João",
    idade: 15,
  },

  {
    nome: "Pedro",
    idade: 18,
  },

  {
    nome: "Maria",
    idade: 17,
  },
  {
    nome: "Lucas",
    idade: 19,
  },
];

let quantidade = 0;

for (const aluno of alunos) {

  if (aluno.idade >= 18) {
    quantidade++;
  }

}
console.log("Quantidade: ", quantidade);
