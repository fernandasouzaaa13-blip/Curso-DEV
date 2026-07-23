//Crie um vetor que funcione como banco de dados contendo cadastros de usuários. Desenvolva uma função
// que verifique se uma combinação específica de email e senha inseridos confere com algum registro do array.
let usuarios = [
  {
    nome: "Fernanda",
    email: "fernanda@email.com",
    senha: "1234",
  },
  {
    nome: "Maria",
    email: "maria@email.com",
    senha: "abcd",
  },
  {
    nome: "João",
    email: "joao@email.com",
    senha: "9876",
  },
];
function verificacao(email, senha) {
  for (let i = 0; i < usuarios.length; i++) {
    if (email === usuarios[i].email && senha === usuarios[i].senha) {
      console.log("A pessoa esta registrada");
      return;
    }
  }

  console.log("nenhum usuário foi encontrado");
}
verificacao("maria@email.com", "ppppp");