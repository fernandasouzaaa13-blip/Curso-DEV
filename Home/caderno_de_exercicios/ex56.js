// Receba uma string JSON contendo uma lista bruta de produtos importados. Converta a string para objeto,
// aplique um acréscimo de 5% de taxa logística em cada produto e exiba os valores atualizados
let smartphone = [
  {
    celular: "Iphone",
    modelo: "16 Plus",
    preco: 4500,
    estoque: 15,
  },
  {
    celular: "Iphone",
    modelo: "17 Plus",
    preco: 7500,
    estoque: 15,
  },
  {
    celular: "Iphone",
    modelo: "15 Plus",
    preco: 2200,
    estoque: 15,
  },
];
console.log(typeof smartphone)


let i= 0 ;
while (i < smartphone.length) {
    let aumento = smartphone[i].preco * (5 / 100);

    smartphone.preco = aumento + smartphone[i].preco;

    console.log(smartphone.preco);

    i++;
}



