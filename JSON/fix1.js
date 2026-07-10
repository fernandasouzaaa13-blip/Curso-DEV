//Criando o objeto
const produto ={
    nome:"Caderno",
    preco: "12.5"
};
//Convertendo o objeto para String JSON
const json = JSON.stringify(produto);
//Exibindo o JSON
console.log(json);
//Verificando o tipo
console.log(typeof json);