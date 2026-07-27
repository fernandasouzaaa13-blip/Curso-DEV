let ladoA = 10;
let ladoB = 20;
let ladoC = 15;

if (ladoA + ladoB > ladoC || ladoA + ladoC > ladoB || ladoB + ladoC > ladoA) {
  if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
    console.log("Equilátero");
  } else if ((ladoA === ladoB && ladoA === ladoC) || ladoB === ladoC) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
  }
} else {
  console.log("Os lados não formam um triângulo");
}
