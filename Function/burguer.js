const readline = require("readline-sync");

const cardapio = [
    { id: 1, nome: "X-Burguer", preco: 18.00 },
    { id: 2, nome: "X-Salada", preco: 20.00 },
    { id: 3, nome: "Batata Frita", preco: 12.00 },
    { id: 4, nome: "Refrigerante", preco: 7.00 }
];

const taxaEntrega = 6.00;

const pedido = {
    itens: [],
    tipoEntrega: "",
    total: 0
};

// Exibe o cardápio
function exibirCardapio(cardapio) {
    console.log("\n===== CARDÁPIO =====");

    for (let item of cardapio) {
        console.log(`${item.id} - ${item.nome} - R$ ${item.preco.toFixed(2)}`);
    }
}

// Adiciona um item ao pedido
function adicionarItem(pedido, item, quantidade) {
    pedido.itens.push({
        nome: item.nome,
        preco: item.preco,
        quantidade: quantidade
    });
}
// Calcula o subtotal
function calcularSubtotal(pedido) {
    let subtotal = 0;

    for (let item of pedido.itens) {
        subtotal += item.preco * item.quantidade;
    }

    return subtotal;
}
// Pergunta o tipo de entrega
function perguntarTipoEntrega() {
    let tipo;
    do {
        tipo = readline.question("Entrega (delivery/retirada): ").toLowerCase();

        if (tipo !== "delivery" && tipo !== "retirada") {
            console.log("Opção inválida!");
        }

    } while (tipo !== "delivery" && tipo !== "retirada");
    return tipo;
}

// Calcula o total
function calcularTotal(subtotal, tipoEntrega, taxaEntrega) {
    if (tipoEntrega === "delivery") {
        return subtotal + taxaEntrega;
    }
    return subtotal;
}
// Exibe o resumo
function exibirResumoPedido(pedido) {
    console.log("\n===== RESUMO DO PEDIDO =====");
    for (let item of pedido.itens) {
        console.log(
            `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}`
        );
    }
    const subtotal = calcularSubtotal(pedido);

    console.log(`\nSubtotal: R$ ${subtotal.toFixed(2)}`);

    if (pedido.tipoEntrega === "delivery") {
        console.log(`Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}`);
    } else {
        console.log("Taxa de entrega: R$ 0,00");
    }
    console.log(`Total: R$ ${pedido.total.toFixed(2)}`);
}
// =======================
// Programa Principal
// =======================
let continuar;
do {
    exibirCardapio(cardapio);
    let id = readline.questionInt("\nDigite o código do produto: ");
    let itemEscolhido = cardapio.find(item => item.id === id);
    if (!itemEscolhido) {
        console.log("Produto não encontrado!");
        continue;
    }
    let quantidade = readline.questionInt("Quantidade: ");

    adicionarItem(pedido, itemEscolhido, quantidade);

    continuar = readline.question("Deseja adicionar mais algum item? (s/n): ").toLowerCase();
} while (continuar === "s");
// Verifica se o pedido está vazio
if (pedido.itens.length === 0) {
    console.log("Você deve escolher pelo menos um item.");
} else {
    pedido.tipoEntrega = perguntarTipoEntrega();
    let subtotal = calcularSubtotal(pedido);
    pedido.total = calcularTotal(
        subtotal,
        pedido.tipoEntrega,
        taxaEntrega
    );
    exibirResumoPedido(pedido);
}