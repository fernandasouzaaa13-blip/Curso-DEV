// Array de idades
const idades = [15, 22, 17, 30, 13, 18];

// Filtrando apenas maiores de idade
const maiores = idades.filter(idade => idade >= 18);

// Criando um novo array com a frase
const frases = maiores.map(idade => `Tem ${idade} anos`);

// Exibindo o resultado
console.log(frases);