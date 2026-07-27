//O valor cobrado depende das horas: 1ª hora = R$ 8,00; 2ª a 4ª hora = R$ 5,00/hora adicional; acima de 4 horas =
//R$ 3,00 por hora adicional a partir da 5ª. Calcule o custo para 'h' horas
const leia = require("prompt-sync")();
const hora_fixa = 8.0;
let tarifa = 0;
let horas = Number(leia("Digite as horas que ficou no estacionamento:"));

if (horas === 1) {
  tarifa = hora_fixa;
} else if (horas <= 4) {
  tarifa = hora_fixa + 5 * (horas - 1);
} else if (horas > 4) {
  tarifa = (hora_fixa + 5 * 3) + (3 * (horas - 4));
}
console.log(" A tarifa é de :" + tarifa);
