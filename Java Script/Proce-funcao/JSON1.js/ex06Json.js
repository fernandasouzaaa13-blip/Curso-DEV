//Criando o objeto 
const aluno ={
    nome:"João",
    idade:16,
    cidade:"Montes Claros"
};
console.log(aluno);
console.log(typeof aluno);
//Convertendo o objeto para Json
const Json =JSON.stringify(aluno);
//Mostrando o Json
console.log(Json);
//Mostrando o tipo do dado
console.log(typeof Json);