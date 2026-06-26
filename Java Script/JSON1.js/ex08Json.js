//Criando a variável
const texto = '{"nome":"Maria","idade":18,"cidade":"Belo Horizonte"}';

//Convertendo o texto  JSON para objeto JavaScript
const pessoa = JSON.parse(texto);

//Mostrando as informações 
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
//Mostrando o tipo de dado
console.log(typeof pessoa);