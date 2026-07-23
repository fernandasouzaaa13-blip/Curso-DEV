const carro = '{"modelo":"Gol","ano":2010,"preco":18000}'
let carroJson= JSON.parse(carro);
console.log(carroJson.modelo);
console.log(typeof carroJson)