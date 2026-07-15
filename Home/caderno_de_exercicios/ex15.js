//: Somatório Acumulado
//Use um loop
//do while para calcular a soma de todos os números de 1 a 100 e exiba o resultado final

let soma = 0;
let i= 1 ;
do {
  soma = soma + i;
  i++;
} while (i <= 100);
console.log(" A soma total é : " + i)
