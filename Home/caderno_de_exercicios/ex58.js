//Escreva uma função que receba uma lista de tempos de resposta de uma API (números inteiros) e retorne
//um objeto JSON resumido informando o maior tempo detectado, o menor e a média de tempo geral.
let lista = [10, 9, 80, 30, 15, 25];
let analise = {
  maior_tempo: 0,
  menor_tempo: 0,
  media: 0,
};
function analiseTempo(lista, analise) {
  let maior = lista[0];
  let menor = lista[0];
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    if (maior > lista[i]) {
      maior = lista[i];
    }
    if (menor < lista[i]) {
      menor = lista[i];
    }
    soma = soma + lista[i];
  }
  analise.maior_tempo = maior;
  analise.menor_tempo = menor;
  analise.media = soma / lista.length;
  return analise;
}
console.log(analiseTempo(lista, analise));
