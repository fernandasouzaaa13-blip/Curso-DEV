// Criando o objeto
const funcionario ={
    nome:"Carlos",
    cargo: "Desenvolvedor",
    salario: 4500
};
//Convertendo o objeto para String JSON
const json = JSON.stringify(funcionario);
//Exibindo o JSON
console.log(json);
//Verificando o tipo
console.log(typeof json);
//Convertendo novamente para objeto
const objeto = JSON.parse(json)
//Exibindo algumas informações
console.log(objeto.nome);
console.log(objeto.cargo);
//Verificando o tipo após a conversão
console.log(typeof objeto);