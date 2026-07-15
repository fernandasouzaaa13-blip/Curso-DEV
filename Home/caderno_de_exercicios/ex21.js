const leia = require("prompt-sync")();
let informacoes = leia("Digite seu nome: ");

function exibirMensagem(){
    console.log( `Olá, ${informacoes}, seja
bem-vindo ao sistema!`)
}
exibirMensagem()