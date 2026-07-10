
//Criando variavel 
let dados = '{"cidade":"Lavras","estado":"MG"}';

//Convertendo o texto  JSON para objeto JavaScript
let objeto = JSON.parse(dados);

//Mostrando as informações 
console.log("Cidade:", objeto.cidade );

//Mostrando o tipo de dado
console.log(typeof objeto);

