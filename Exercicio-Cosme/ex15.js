
const conta = {
    titular: "Maria Fernanda",
    saldo: 500,

    extrato: [
        {
            tipo: "deposito",
            valor: 520,
            data: "05/07/2026",
        } ,
        {
            tipo: "deposito",
            valor: 200,
            data: "05/07/2026",
        },

      {
            tipo: "deposito",
            valor: 7000,
            data: "05/07/2026",
        }
    ]
}

for (let i = 0; i < conta.extrato.length; i++) {
    console.log("\x1b[33m" + conta.extrato[i].valor + "\x1b[0m");
}