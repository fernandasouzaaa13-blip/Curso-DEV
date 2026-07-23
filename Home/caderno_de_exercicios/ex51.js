//Crie uma função que receba um Array de Objetos (contendo nome e idade) e retorne uma nova lista contendo apenas as pessoas que possuem 18 anos ou mais.
let usuario = [
  {
    nome: "Maria",
    idade: 18,
  },
  {
    nome: "José",
    idade: 17,
  },
  {
    nome: "Carlos",
    idade: 20,
  },
];

function ReceberObjeto(usuario) {
  let maioresDeIdade = [];

  let i = 0;

  while (i < usuario.length) {
    if (usuario[i].idade >= 18) {
      maioresDeIdade.push(usuario[i]);
    }

    i++;
  }

  return maioresDeIdade;
}

console.log(ReceberObjeto(usuario));
