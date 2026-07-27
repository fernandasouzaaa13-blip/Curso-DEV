//Receba um valor em Reais (BRL) e um código de moeda ('USD', 'EUR', 'GBP'). Use `else if` ou `switch` para converter considerando taxas fictícias (USD: 5.0, EUR: 5.5, GBP: 6.5). Exiba o valor convertido ou erro para moeda inválida

const leia = require("prompt-sync")();
const moeda = Number(
  leia("Digite a moeda desejada: 1 - USD, 2- EUR , 3 - GBP "),
);
const receber_valor = Number(leia("Digite um valor em REAIS: "));
let valor_convertido = 0 
switch (moeda) {
  case 1:
    valor_convertido = receber_valor/5.0;
    console.log("O valor USD é: " + valor_convertido);
    break;
  case 2:
    valor_convertido = receber_valor/5.5;
    console.log("O valor EUR  é: "+ valor_convertido);
    break;
  case 3:
    valor_convertido= receber_valor/6.5;
    console.log("O valor GBP é: "+valor_convertido);
    break;
  default:
    console.log("O valor da moeda inválido");
}
