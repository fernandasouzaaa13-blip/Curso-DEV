const leia = require("prompt-sync")();
let temperatura = Number(leia("Digite temperatura em graus Celsius: "));
function celsiusParaFahrenheit (temperatura){
    let soma = (temperatura*1.8)+32;
    return soma 
}
let resultado = celsiusParaFahrenheit(temperatura);
console.log("A temperatura em Fahrenheit é: ",resultado)