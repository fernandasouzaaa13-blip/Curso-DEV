const smartphone= {
    celular:"Iphone",
    modelo:"16 Plus",
    preco:4500.00,
    estoque:15
};
let aumento =  smartphone.preco * (10/100);
smartphone.preco = aumento+smartphone.preco
console.log(smartphone.preco)
console.log(typeof smartphone)