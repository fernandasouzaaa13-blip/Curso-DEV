// Array de cores
const cores = ["vermelho", "verde", "azul"];

// Convertendo para JSON
const texto = JSON.stringify(cores);

// Convertendo novamente para array
const novoArray = JSON.parse(texto);

// Exibindo o resultado
console.log(novoArray);

// Exibindo o tipo
console.log(typeof novoArray);