// Array de produtos
const produtos = [
    { nome: "Mochila", preco: 89 },
    { nome: "Caneta", preco: 3 },
    { nome: "Livro", preco: 45 }
];

// Encontrando o primeiro produto abaixo de 30 reais
const produto = produtos.find(item => item.preco < 30);

// Exibindo apenas o nome
console.log(produto.nome);