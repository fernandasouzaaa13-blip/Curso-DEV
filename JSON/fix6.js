//Criando um array
const notas = [7,8,6,10,5,];

// Verifica se existe algum aluno com nota maior/igual à 10
const boleean = notas.some(notas=> notas >=10);
// Exibe o resultado (true ou false)
console.log(boleean);
// Mostra o tipo de dado retornado pelo some()
console.log(typeof boleean);

if (boleean===true){
    console.log("Tem nota máxima!")
}
else{
       console.log("Nenhum") 
    }