// Criando um objeto para representar um carro.
// Objetos armazenam informações em pares (propriedade: valor).
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2023
};

// Transformando o objeto em uma string JSON.
// JSON.stringify() converte objetos JavaScript em texto.
const carroJSON = JSON.stringify(carro);

// Exibindo a string JSON.
console.log(carroJSON);

// typeof informa o tipo da variável.
// Como JSON.stringify retorna um texto,
// o resultado será "string".
console.log(typeof carroJSON);