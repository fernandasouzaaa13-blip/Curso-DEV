// A variável contém uma string no formato JSON.
// Apesar de parecer um objeto,
// ela ainda é apenas um texto.
const dados = '{"nome":"Fernanda","curso":"ADS","periodo":"Noite"}';

// Convertendo o texto em objeto JavaScript.
const aluno = JSON.parse(dados);

// Agora podemos acessar cada propriedade usando ponto.
console.log(aluno.nome);
console.log(aluno.curso);