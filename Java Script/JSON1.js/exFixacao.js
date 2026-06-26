const alunos =[ 
{
    nome:"Lucas",
    idade:15,
    cpf :"111.111.111 = 11",
    cidade:"Curitiba",
    estado:"PR"
},
{
    nome:"Fernanda",
    idade:17,
    cpf :"222.222.222=22",
    cidade:"Recife",
    estado:"PE"
},
{
    nome:"Rafael",
    idade:16,
    cpf :"333.333.333=33",
    cidade:"Curitiba",
    estado:"PR"
},
{
    nome:"Camila",
    idade:18,
    cpf :"444.444.444=44",
    cidade:"Salvador",
    estado:"BA"
},

]; 
alunos.filter(aluno=>aluno.estado === "PR")
console.log(alunos);
//Mostrando o tipo do dado
console.log(typeof alunos);
alunos.find(aluno=>aluno.nome=== "Fernanda")
console.log(alunos);
//Mostrando o tipo do dado
console.log(typeof alunos);

alunos.some(aluno=>aluno.estado === "PR")
console.log(alunos);
//Mostrando o tipo do dado
console.log(typeof alunos);

alunos.map(aluno=>aluno.estado === "PR")
console.log(alunos);
//Mostrando o tipo do dado
console.log(typeof alunos);





