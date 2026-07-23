const produto ={
    nome: "secador",
    preco:45.90,
    estoque:4
};
let produtoJSON = JSON.stringify(produto);
console.log(produtoJSON);
console.log(typeof produtoJSON)