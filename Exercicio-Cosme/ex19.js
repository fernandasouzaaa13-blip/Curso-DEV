const pedido = {
  tipoEntrega: "retirada",
};
console.log("===============================");
if(pedido.tipoEntrega === "delivery"){
 console.log("\x1b[35m Taxa de entrega será cobrada \x1b[0m");
}

if(pedido.tipoEntrega === "retirada"){ 
    console.log("\x1b[35m Sem taxa de entrega\x1b[0m");
}