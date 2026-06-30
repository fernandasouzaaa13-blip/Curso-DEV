// Array de cidades
const cidades = [
    { nome: "Lavras", hab: 102000 },
    { nome: "Boa Esperança", hab: 38000 },
    { nome: "Varginha", hab: 130000 }
];

// Encontrando a primeira cidade com mais de 100 mil habitantes
const cidade = cidades.find(c => c.hab > 100000);

// Exibindo o nome
console.log(cidade.nome);