const pedido = {
  itens: [],
  tipoEntrega: "delivery",
  total: 45.0,
};
console.log("===============================");
if(pedido.itens ){
    console.log("\x1b[35m Pedido vazio \x1b[0m");
}else{
    console.log("\x1b[35m Pedido pronto para finalizar \x1b[0m");
}