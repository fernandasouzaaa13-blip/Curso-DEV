import readline from "readline-sync";
const RESET = "\x1b[0m";
const NEGRITO = "\x1b[1m";
const VERMELHO = "\x1b[31m";
const VERDE = "\x1b[32m";
const AMARELO = "\x1b[33m";
const AZUL = "\x1b[34m";
const MAGENTA = "\x1b[35m";
const CIANO = "\x1b[36m";
const BRANCO = "\x1b[37m";
// ================= CORES FUNDOS =================
const BG_PRETO = "\x1b[40m";
const BG_VERMELHO = "\x1b[41m";
const BG_VERDE = "\x1b[42m";
const BG_AMARELO = "\x1b[43m";
const BG_AZUL = "\x1b[44m";
const BG_MAGENTA = "\x1b[45m";
const BG_CIANO = "\x1b[46m";
const BG_BRANCO = "\x1b[47m";
 
const nome = readline.question("Digite seu nome: ");
console.log(`\x1b[32m Olá, ${nome}! Bem-vindo à lanchonete. \x1b[0m`);
console.log(`${BG_VERDE}${BRANCO}${NEGRITO} Olá, ${nome}! Bem-vindo à lanchonete.${RESET} `);
 
const cardapio = [
  { id: 1, nome: "X-Burguer", preco: 18.0 },
  { id: 2, nome: "X-Salada", preco: 20.0 },
  { id: 3, nome: "Batata Frita", preco: 12.0 },
  { id: 4, nome: "Refrigerante", preco: 7.0 },
];
 const taxaEntrega = 6.00;
  const pedido = {
    itens:[],
    tipoEntrega:"",
    subtotal:0,
    total:0
  };

  function exibirCardapio(){
    console.log("\n============= Cardápio ========");
    for (let i =0; i < cardapio.length ; i ++){
        console.log(
            cardapio[i].id + "-"+
            cardapio[i].nome +
            " -R$"+
            cardapio[i].preco.toFixed(2)
        );
    }
  }

function adicionarItem(item,quantidade){
    pedido.itens.push({
        nome:item.nome,
        preco:item.preco,
        quantidade:quantidade
     });
 console.log("Item adicionado com sucesso!\n");

}
function calcularSubtotal(){
    pedido.subtotal=0
    for (let i = 0 ; i < pedido.itens.length; i ++){
        pedido.subtotal+= pedido.itens[i].preco *pedido.itens[i].quantidade;

    }
}
function perguntarTipoEntrega(){
       console.log("\n 1 -Delivery");
           console.log("\n2- Retirada");
    let opcao = readline.question("Escolha: ");
    if (opcao==1){
        pedido.tipo = "Delivery";

    }else{
        pedido.tipoEntrega = "Retirada";
    }

}
 function calcularTotal(){
    if (pedido.tipoEntrega == " Delivery"){
        pedido.total = pedido.subtotal + taxaEntrega; 

    }else{
        pedido.total = pedido.subtotal;
    }
 }

 function exibirCardapio(){
   console.log("===========Resumo do Pedido");
   for (let i = 0; i < pedido.item.length; i ++){
    console.log(
        pedido.itens[i].nome + 
        "| Quantidade:" +
        pedido.itens [i]. quantidade +
        "| Total: R$" + 
        (pedido.itens[i].preco * pedido.item [i]. quantidade). toFixed(2)
    );
   }
   console.log("===============================");
   console.log("Subtotal: R$ "+ pedido.subtotal.toFixed(2));
   if (pedido.tipoEntrega == "delivery"){
    console.log("Taxa de entrega: R$ "+ taxaEntrega.toFixed(2));

   }else{
    console.log("Taxa de entrega: R$ 0,00");
   }
   console.log("Total a pagar: R$"+ pedido.total.toFixed(2));
}