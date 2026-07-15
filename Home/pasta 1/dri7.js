function imprimirTabuada(numero){
    for(let i = 1; i <=10; i++){
        let resultado = numero*i
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}
imprimirTabuada(120)