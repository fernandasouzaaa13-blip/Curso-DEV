//Desenvolva uma função que receba um array contendo strings aleatórias e utilize uma estrutura de repetição
//associada a condicionais para contar quantas vezes a string "JavaScript" aparece no vetor

let linguagens = [
  "Java",
  "Python",
  "JavaScript",
  "C#",
  "JavaScript",
  "PHP",
  "JavaScript",
];
function contarJavaScript(linguagens) {
  let contador = 0;
  for (let i = 0; i < linguagens.length; i++) {
    if (linguagens[i] === "JavaScript") {
      contador = contador + 1;
    }
  }
  return contador
}
console.log(contarJavaScript(linguagens));
