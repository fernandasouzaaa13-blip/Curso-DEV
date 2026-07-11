function ehPar(numero) {
  if ( numero % 2 === 0 ) {
    console.log("Par");
  } else {
    console.log("Impar");
  }
}
const leia = require("prompt-sync")()
let digite = leia("Digite um número: ")
ehPar(digite)