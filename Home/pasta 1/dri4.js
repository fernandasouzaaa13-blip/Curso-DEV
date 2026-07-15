function situacaoAluno(media) {
  if (media >= 7) {
    return "Aprovado"
  } else if (media >= 5 && media <= 6.9) {
    return "Recuperação"
  } else if (media < 5) {
    return "Reprovado"
  }
}
console.log(situacaoAluno(10))

