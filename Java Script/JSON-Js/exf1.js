//Criando o objeto
const produtos =[
{
    id:1,
    nome:"Mouse",
    preco: 80,
    estoque: 10
},

{
    id:2,
    nome:"Teclado",
    preco: 150,
    estoque: 5
},
{
    id:3,
    nome:"Monitor",
    preco: 1200,
    estoque: 2
}
];

const novoProduto={
    id:4,
    nome:"Mesa",
    preco:350,
    estoque:7
};
produto.push(novoProduto);

console.log(novoProduto)

const indice = 































//Convertendo o objeto para String JSON
const json = JSON.stringify(produto);
//Exibindo o JSON
console.log(json);
//Verificando o tipo
console.log(typeof json);