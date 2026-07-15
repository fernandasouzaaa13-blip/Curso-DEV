// Exercício 19
// Reutilização do código anterior(Exercício 3)
const pedido = {
  itens: [],
  tipoEntrega: "delivery",
  total: 45.0,
};

if(pedido.tipoEntrega === "delivery"){
  console.log("\x1b[33m ============================\x1b[0m");
 console.log("\x1b[36m Taxa de entrega será cobrada \x1b[0m");
}

if(pedido.tipoEntrega === "retirada"){ 
   console.log("\x1b[33m ====================\x1b[0m")
    console.log("\x1b[36m Sem taxa de entrega\x1b[0m");
}