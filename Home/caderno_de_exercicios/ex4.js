let cliente = "Frequente";
let valor = 100;
let valorFinal = 0;
if (cliente === "VIP") {
  valorFinal = valor - valor * 0.2;
  console.log(`20% de desconto - valor final ${valorFinal} `);
} else if (cliente === "Frequente") {
  valorFinal = valor - valor * 0.1;
  console.log(`10% de desconto - valor final ${valorFinal} `);
} else {
  console.log(`Comum ${valor}`);
}
