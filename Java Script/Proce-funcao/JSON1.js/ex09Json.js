//Criando o objeto 
const funcionario ={
    nome:"Carlos",
    cargo:"Desenvolvedor",
    salario: 4500
};
//Convertendo o objeto para Json
const Json =JSON.stringify(funcionario);
//Mostrando o Json
console.log(Json);
console.log(funcionario);
console.log(typeof funcionario);

const Json2 = JSON.parse(Json2);

console.log(funcionario.nome);
console.log(funcionario.cargo);

console.log(typeof funcionario);
