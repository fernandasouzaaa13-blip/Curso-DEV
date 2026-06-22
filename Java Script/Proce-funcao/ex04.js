// Minha Função
function mostrarTabuada( ) {
 //montar a tabuada do 5
  for (contador = 1; contador <= 10 ; contador++){
    let multiplicacao = contador * 5; 
    //tabuada no número 5
    console.log(`5 x ${contador} = ${multiplicacao}`);
  }
}
//chamando o procedimento
mostrarTabuada()