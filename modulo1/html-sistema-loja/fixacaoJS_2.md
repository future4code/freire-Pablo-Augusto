```
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let precoTotal = 0
  
  if (quantidade < 12) {
    precoTotal = quantidade * 1.30
  } else {
    precoTotal = quantidade * 1.00
  }
  
  return precoTotal
  
}
```