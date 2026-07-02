// Criando o array de produtos.
const produtos = [
    {
        id: 1,
        nome: "Mouse",
        preco: 80,
        estoque: 10
    },
    {
        id: 2,
        nome: "Teclado",
        preco: 150,
        estoque: 5
    },
    {
        id: 3,
        nome: "Monitor",
        preco: 1200,
        estoque: 2
    }
];

// Criando um novo produto que será adicionado ao estoque.
const novoProduto = {
    id: 4,
    nome: "Mesa",
    preco: 350,
    estoque: 7
};

// O método push() adiciona um novo elemento ao final do array.
produtos.push(novoProduto);

// Exibindo o array após adicionar o novo produto.
console.log(produtos);

// O método findIndex() percorre o array procurando o primeiro produto
const indice = produtos.findIndex(produto => produto.id === 2);
// Exibindo o índice encontrado.
console.log(indice);

// O método splice remove elementos do array.
//Será removido apenas o produto com id igual a 2.
produtos.splice(indice, 1);

// Exibindo o array após remover o produto.
console.log(produtos);

// delete remove uma propriedade de um objeto.
// O objeto continua existindo, apenas a propriedade é removida.
delete produtos[0].estoque;

// Exibindo o array após remover a propriedade.
console.log(produtos);
// Tipo 
console.log(typeof produtos)