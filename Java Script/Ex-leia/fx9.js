const leia = require("prompt-sync")()

let n1 = Number(leia("Digite o primeiro número: "))
let n2 = Number(leia("Digite o segundo número: "))
let n3 = Number(leia("Digite o terceiro número: "))

if (n1 > n2 && n1 > n3) {
    console.log("O maior é:", n1)
} else if (n2 > n1 && n2 > n3) {
    console.log("O maior é:", n2)
} else {
    console.log("O maior é:", n3)
}
