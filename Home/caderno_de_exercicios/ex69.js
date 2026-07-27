//Verificador de Quadrante do Plano Cartesiano
//Receba as coordenadas X e Y. Determine se o ponto está na Origem (0,0), sobre o Eixo X, Eixo Y, ou em qual dos
//4 Quadrantes (Q1, Q2, Q3, Q4) se encontra.

const leia = require("prompt-sync")();
const valor_x = Number(leia("Digite o valor de X :"));
const valor_y= Number(leia("Digite o valor de Y :"));

if(valor_x===0 && valor_y===0){
    console.log("O ponto da na Origem (0,0)");
}else if(valor_y===0){
    console.log("O ponto está sobre o Eixo X")
}else if(valor_x===0){
    console.log("O ponto está sobre o Eixo Y")
}
else if (valor_x>0 && valor_y>0){
 console.log("O ponto está sobre o Q1")
}else if( valor_x<0 && valor_y>0){
 console.log("O ponto está sobre o Q2")
}else if( valor_x<0 && valor_y<0){
 console.log("O ponto está sobre o Q3")
}else if (valor_x>0 && valor_y<0){
 console.log("O ponto está sobre o Q4")
}