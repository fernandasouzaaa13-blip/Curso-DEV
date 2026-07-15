//Mapeamento de Propriedades com for...in
//Dado o objeto 
//{ carro: 'Fusca', ano: 1974, cor: 'Azul' } , use o loop for .... in para listar todas 
//as chaves e valores no console
let carro  = { carro: ' Fusca ', ano: ' 1974 ', cor: ' Azul ' };
for (let modelo in carro ){
    console.log( modelo + carro[modelo])
}
