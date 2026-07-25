let ano = 2028;
function anoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 != 0) || ano % 400 === 0) {
    return "Bissexto"
  }else{
    return "Não bissexto"
  }
}
console.log(anoBissexto(ano))
