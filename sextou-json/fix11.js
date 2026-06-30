// Array de nomes
const nomes = ["Ana", "Beatriz", "Carlos", "Enzo"];

// Verificando se existe algum nome com mais de 8 letras
const resultado = nomes.some(nome => nome.length > 8);

// Exibindo o resultado
console.log(resultado);