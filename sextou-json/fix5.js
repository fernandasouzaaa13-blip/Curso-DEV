// Criando um array com os preços.
const precos = [20, 50, 100, 80];

// O método map() percorre todos os elementos do array
// criando um novo array.
//
// Cada preço será multiplicado por 1.15,
// que representa um aumento de 15%.
const novosPrecos = precos.map(function(preco) {

    // Calculando o novo valor.
    return preco * 1.15;

});

// Exibindo o novo array.
console.log(novosPrecos);

// Resultado:
// [23, 57.5, 115, 92]

