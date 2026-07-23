//Escreva uma função que leia um objeto representando um aluno com uma lista de 4 notas. Calcule a média
//usando um loop e retorne se o aluno foi "Aprovado" (média >= 7) ou "Reprovado"
let aluno ={
    nome:"João",
    serie: "3-A",
   notas: [10, 7, 5, 9]
};
let soma = 0
let media = 0
 for (let i = 0; i < aluno.notas.length; i++){
    soma = soma + aluno.notas[i]
 }
 media = soma/aluno.notas.length
 if (media >=7){
    console.log("Aprovado" + media)
 }else{
    console.log("Reprovado")
 }





