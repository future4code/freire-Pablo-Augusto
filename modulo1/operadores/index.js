/* Exercício 1 interpretação
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //  a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) d. boolean

*/

/* Exercício 2 interpretação

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // O programa vai concatenar os valores das variáveis em vez de somá-los como números
*/

/* Exercício 3 interpretação 

// A solução abaixo corrige o problema do código

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/

/* Exercício 1 escrita 

const idadeUsuario = prompt("Digite sua idade:")
const idadeAmigo = prompt("Digite a idade de um(a) amigo(a):")

const resultado = Number(idadeUsuario) > Number(idadeAmigo)
const diferenca = Number(idadeUsuario) - Number(idadeAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
console.log("A diferença entre as idades é:", diferenca)

*/

/* Exercício 2 escrita 

const numeroPar = Number(prompt("Insira um número par:"))
const resto = numeroPar % 2
console.log(resto)

// O resultado sempre será zero
// Se o número inserido for ímpar o resultado será 1
*/

/* Exercício 3 escrita 

const idadeAnos = Number(prompt("Insira sua idade em anos:"))
const idadeMeses = idadeAnos * 12
const idadeDias = idadeMeses * 365
const idadeHoras = idadeDias * 24

console.log("A sua idade em meses é ", idadeMeses, "\nA sua idade em dias é ", idadeDias, "\nAsua idade em horas é ", idadeHoras)

*/

/* Exercício 4 escrita 

const n1 = Number(prompt("Insira o primeiro número:"))
const n2 = Number(prompt("Insira o segundo número:"))

console.log("O primeiro numero é maior que segundo?", n1 > n2)
console.log("O primeiro numero é igual ao segundo?", n1 === n2)
console.log("O primeiro numero é divisível pelo segundo?", n1 % n2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", n2 % n1 === 0)
*/

/* Desafio 1 


// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32


let valor = (77 - 32)*(5/9) + 273.15
console.log("Desafio 1")
console.log("a) 77°F é igual a", valor, "K")

valor = (80)*(9/5) + 32
console.log("b) 80°C é igual a", valor, "°F")

valor = (30)*(9/5) + 32
console.log("c) 30°C é igual a", valor, "°F e", (30 + 273.15), "K")

valorLido = Number(prompt("Insira o valor em graus Celsius"))
valor = (valorLido)*(9/5) + 32
console.log("d)", valorLido, "°C é igual a", valor, "°F e", (valorLido + 273.15), "K")

*/

/* Desafio 2 

let valorAPagar = 280 * 0.05
console.log("O valor a ser pago por uma residência que consuma 280 quilowatt-hora é", valorAPagar, "reais")

const indiceDesconto = 0.85

valorComDesconto = valorAPagar * indiceDesconto
console.log("O valor a ser pago com 15% de desconto é", valorComDesconto, "reais")

*/

/* Desafio 3 

let valorEmKilos = 20 * 0.45
console.log("20lb equivalem a" , valorEmKilos,"kg")

valorEmKilos = 10.5 * 0.028
console.log("10.5oz equivalem a" , valorEmKilos,"kg")

let valorEmMetro = 100 * 1609.34
console.log("100mi equivalem a", valorEmMetro,"m")

valorEmMetro = 50 * 0.3048
console.log("50ft equivalem a", valorEmMetro,"m")

let valorEmLitro = 103.56 * 3.78541
console.log("103.56gal equivalem a", valorEmLitro,"l")

valorEmLitro = 450 * 0.24
console.log("450xic equivalem a", valorEmLitro,"l")

valorEmMilhas = Number(prompt("Insira o valor de uma distância em milhas:"))
valorEmMetro = valorEmMilhas * 1609.34
console.log(valorEmMilhas + "mi equivalem a " + valorEmMetro + "m")

*/