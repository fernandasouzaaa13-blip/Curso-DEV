// Criando o array de produtos.
const estoque = [
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
//Procedimento (função) para cadastrar um novo produto
//Responsabilidade: adicionar produto

function cadastrarProduto(estoque, produtoNovo) {
estoque .push (produtoNovo);
console. log("Produto cadastrado com sucesso!");
console. log(produtoNovo);
}

//Localiza o indice de um produto pelo ID
//Responsabilidade: apenas localizar
function encontrarIndice(estoque, id) {
const indice = estoque.findIndex(produto => produto.id = id);
console. log(' Índice encontrado para o ID ${id}:', indice);
return indice;
}

//Exclui um produto da lista
//Responsabilidade: remover produto

function excluirProduto(lista, id) {
const indice = encontrarIndice(lista, id);

if (indice != -1){ 
lista.splice(indice, 1);
console. log(` Produto com ID ${id} removido.`);
} else {
console. log("Produto não encontrado.");
}
}
// Remove a propriedade estoque
// Responsabilidade: remover propriedade 
function removerEstoque(estoque, id) {
const indice = encontrarIndice(estoque, id);
if (indice != -1) {
delete estoque[indice].estoque;
console. log(`Propriedade 'estoque' removida do produto ${id}.`);
} else {
    console. log(" Produto não encontrado.");
 }
}
//Exibe todos os produtos
//Responsabilidade: mostrar dados
function listarProdutos(estoque) {
console. log(" Lista final de produtos:");
console. log(estoque);
}

//TESTES DAS FUNÇÕES APLICATIVO PRINCIPAL
//Novo produto a ser cadastrado

const produtoNovo = {
id: 4,
nome: "Fone de ouvido",
preco: 200,
estoque: 15
};
//1 - Cadastrar um novo produto
cadastrarProduto(estoque, produtoNovo);
console. log("Estoque após cadastro:", estoque);
//2 - Encontrar indice do produto
encontrarIndice(estoque, 2);
// 3 - Excluir produto de ID 2
excluirProduto(estoque, 2);
// 4 - Remover propriedade estoque do produto ID 1
removerEstoque(estoque, 1);
// 5 - Exibir lista final
listarProdutos(estoque);