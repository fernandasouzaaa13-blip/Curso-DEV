const leia = require("prompt-sync")()
let hora = leia("Digite a hora do dia que você quer saber: ")

if (hora >0 && hora <= 12){
     console.log("Bom dia")
}else if (hora =>13  && hora <=17){ 
    console.log("Boa tarde")
}else if (hora =>18  && hora <=23){ 
    console.log("Boa noite")
}else{
    console.log("Hora inválida")
}