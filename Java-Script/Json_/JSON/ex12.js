// Verifica se existe algum aluno do estado "PB"
const existePB = alunos.some(aluno => aluno.estado === "PB");
// Exibe o resultado (true ou false)
console.log(existePB);
// Mostra o tipo de dado retornado pelo some()
console.log(typeof existePB);

// Cria um novo array informando se cada aluno é do estado "PB"
const resultadoMap = alunos.map(aluno => aluno.estado === "PB");
// Exibe o novo array
console.log(resultadoMap);
// Mostra o tipo de dado retornado pelo map()
console.log(typeof resultadoMap);