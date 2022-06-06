```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numeroOcorrencias = 0
  for (let numero of arrayDeNumeros) {
    if (numero === numeroEscolhido) {
      numeroOcorrencias++
    }
  }
  if (numeroOcorrencias === 0) {
    return "Número não encontrado"
  } else {
    return `O número ${numeroEscolhido} aparece ${numeroOcorrencias}x`
  }
}
```