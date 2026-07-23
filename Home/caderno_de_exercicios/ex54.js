//Crie uma função que receba um objeto JSON estruturado como carrinho de compras. 
// Utilizando uma estrutura de laço à sua escolha, calcule e retorne o valor total bruto da compra.
const carrinho = {
    sabão: 45,
    amaciante: 25.5,
    detergente: 9.90,
};

function ReceberObjeto(carrinho) {

    let soma = 0;

    let i = 0;

    let valores = Object.values(carrinho);
    while (i < valores.length) {

        soma = soma + valores[i];

        i++;
    }

    return soma;
}

console.log(ReceberObjeto(carrinho));
