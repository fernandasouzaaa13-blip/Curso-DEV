function somaAteN(n) {
  let i = 1;
  let soma = 0;
  while (i <= n) {
    soma = soma + i;
    i++;
  }
  return soma;
}
console.log(somaAteN(5));
