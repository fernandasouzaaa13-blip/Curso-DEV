let valor_total = 300;
let valor_final = 0;
if (valor_total <= 100) {
  console.log(" Não há desconto.");
} else if (valor_total > 100) {
  //valor do desconto = valor bruto * porcentagem
  //o valor final é = o seu valor bruto - o valor do desconto
  //valor final =valor bruto-(valor bruto*porcentagem)
  valor_final = valor_total - valor_total * 0.05;
} else if (valor_total > 300) {
  valor_final = valor_total - valor_total * 0.1;
} else if (valor_total > 500) {
  valor_final = valor_total - valor_total * (15 / 100);
}
    console.log(valor_final)