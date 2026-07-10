//Criando o objeto
const produto ={
    nome:"Notbook",
    preco: "3500",
    estoque: 12
};
//Obtendo as propriedades
const propriedades = Object.keys(produto)
//Exigindo às propriedades
console.log(propriedades);
//Verificando o tipo
console.log(typeof propriedades);
//Obtendo os valores
const valores = Object.values(produto);
//Exibindo os valores
console.log(valores);
//Verificando o tipo
console.log(typeof valores);
//Percorrendo às propriedades
//(\n: Quebra de linhas)
console.log("\nPropriedades:");
propriedades.forEach(propriedade=>{
    console.log(propriedade);
});
//Percorrendo os valores
console.log("\nValores:");
valores.forEach(valor=>{
    console.log(valor);
});