// Exercício 20
// Reutilização do código anterior(Exercício 3)
const pedido = {
  itens: [],
  tipoEntrega: "delivery",
  total: 45.0
};
 
if(pedido.itens.length===0){
    console.log("\x1b[32m============\x1b[0m");
    console.log("\x1b[35mPedido vazio \x1b[0m");
}else{
    console.log("\x1b[32m============================\x1b[0m");
    console.log("\x1b[35mPedido pronto para finalizar \x1b[0m");
}