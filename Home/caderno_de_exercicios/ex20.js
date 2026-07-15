//Crie um loop de 1 a 100, mas configure uma condicional interna para
//  interromper a execução usando a palavra-chave break assim que o número atingir 42.
let i = 1;
while (i <= 100) {
  console.log(i);
  if (i === 42) {
    break;
  }
   i++;
}
