const texto = '{"nome":"Maria","idade":18,"cidade":"Belo Horizonte"}';
const pessoa = JSON.parse(texto);

console.log(pessoa.nome);
console.log(pessoa.idade);

console.log(typeof pessoa);
