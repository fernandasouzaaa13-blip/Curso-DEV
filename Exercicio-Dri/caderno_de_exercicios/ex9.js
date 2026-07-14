const leia = require("prompt-sync")();
let lado1 = leia("Digite o primeiro lado: ");
let lado2 = leia("Digite o segundo lado: ");
let lado3 = leia("Digite o terceiro lado: ");
if (lado1===lado2 && lado2===lado3 && lado3===lado1){ 
    console.log("Triângulo Equilátero")

}else if (lado1 === lado2 || lado2===lado3 || lado3===lado1){
      console.log("Isósceles")
} else{
       console.log("Escaleno")
}
 
