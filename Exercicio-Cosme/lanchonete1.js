const readline = require("readline-sync");

// Cardápio da lanchonete
const cardapio = [
    { id: 1, nome: "X-Burguer", preco: 18.00 },
    { id: 2, nome: "X-Salada", preco: 20.00 },
    { id: 3, nome: "Batata Frita", preco: 12.00 },
    { id: 4, nome: "Refrigerante", preco: 7.00 }
];
// Taxa de entrega
const taxaEntrega = 6.00;
// Objeto do pedido
const pedido = {
    itens: [],
    tipoEntrega: "",
    subtotal: 0,
    total: 0
};
// Mostra o cardápio
function exibirCardapio(cardapio){
    console.log("\n===== CARDÁPIO =====");
    for(let item of cardapio){
        console.log(item.id + " - " + item.nome + " - R$ " + item.preco.toFixed(2));
    }
}
// Adiciona um item ao pedido
function adicionarItem(pedido, item, quantidade){
    pedido.itens.push({
        nome: item.nome,
        preco: item.preco,
        quantidade: quantidade
    });
}
// Calcula o subtotal
function calcularSubtotal(pedido){
    pedido.subtotal = 0;
    for(let item of pedido.itens){
        pedido.subtotal += item.preco * item.quantidade;
    }
}
// Pergunta o tipo da entrega
function perguntarTipoEntrega(pedido){
    pedido.tipoEntrega = readline.question("Delivery ou retirada? ");
}
// Calcula o valor total
function calcularTotal(pedido){
    pedido.total = pedido.subtotal;
    if(pedido.tipoEntrega == "delivery"){
        pedido.total += taxaEntrega;
    }
}
// Mostra o resumo do pedido
function exibirResumoPedido(pedido){
    console.log("\n===== RESUMO DO PEDIDO =====");
    for(let item of pedido.itens){
        console.log(item.nome + " x " + item.quantidade +" = R$ " + (item.preco * item.quantidade).toFixed(2));
    }
    console.log("Subtotal: R$ " + pedido.subtotal.toFixed(2));
    if(pedido.tipoEntrega == "delivery"){
        console.log("Taxa de entrega: R$ " + taxaEntrega.toFixed(2));
    }else{
        console.log("Taxa de entrega: R$ 0,00");
    }

    console.log("Total: R$ " + pedido.total.toFixed(2));
}
// ===================== PROGRAMA PRINCIPAL =====================
exibirCardapio(cardapio);

let continuar = "s";

while(continuar == "s"){

    let codigo = readline.questionInt("Digite o código do produto: ");
    let quantidade = readline.questionInt("Quantidade: ");
    let encontrou = false;
    for(let item of cardapio){
        if(item.id == codigo){
            adicionarItem(pedido, item, quantidade);
            encontrou = true;
             }
    }
    if(encontrou == false){
            console.log("Produto não encontrado!");

    }

continuar = readline.question("Deseja adicionar outro item? (s/n): ");

}

if(pedido.itens.length == 0){
    console.log("Você precisa escolher pelo menos um item.");
}else{

    calcularSubtotal(pedido);
    perguntarTipoEntrega(pedido);
    calcularTotal(pedido);
    exibirResumoPedido(pedido);

}