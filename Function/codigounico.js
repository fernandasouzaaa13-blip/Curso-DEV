console.log("===============================");
console.log("\n=== Caixa Eletrônico===");
console.log("===============================");
// Exercício 1
const conta = {
    titular: "Maria Fernanda",
    saldo: 500,
    extrato: []
};

console.log("\x1b[32mConta criada com sucesso!\x1b[0m");

// Exercício 2
const cardapio = [
    {
        nome: "Hambúrguer",
        preco: 25
    },
    {
        nome: "Batata Frita",
        preco: 15
    },
    {
        nome: "Refrigerante",
        preco: 8
    }
];

console.log("\x1b[34mCardápio criado!\x1b[0m");

// Exercício 3
const pedido = {
    itens: [],
    tipoEntrega: "delivery",
    total: 45.00
};

console.log("\x1b[33m" + pedido.tipoEntrega + "\x1b[0m");

// Exercício 4
conta.extrato.push({
    tipo: "deposito",
    valor: 100,
    data: "05/07/2026"
});

console.log("\x1b[35mMovimentação adicionada!\x1b[0m");