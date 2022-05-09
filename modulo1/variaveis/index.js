/*
//Exercício 1 interpretação

let a = 10
let b = 10

console.log(b) // o valor impresso de b é 10

b = 5
console.log(a, b) // Os valores impressos são: a = 10 e b = 5

*/

/*
//Exercício 2 interpretação

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // O programa vai imprimir 10, 10, 10

*/

/*
//Exercício 3 interpretação

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

// O código acima lê a quantidade de horas trabalhadas e o salário de alguém e imprime um alerta dizendo quanto essa pessoa recebe por hora.
// As variáveis poderiam ter os seguintes nomes:

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let salarioDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioDiario/horasTrabalhadas} por hora`)

*/

/*
// Exercício 1 escrita

let nome
let idade
console.log(typeof nome, typeof idade)
// Foi impresso 'undefined' pois como não foi atribuído valor às variáveis, elas ainda não foram definidas

nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")
console.log(typeof nome, typeof idade)
// Os tipos mudaram para String. O prompt sempre retorna valores String.

console.log("Olá", nome, "você tem", idade, "anos.")

*/
/* 
//Exercício 2 escrita

let roupa = prompt("Você está usando uma roupa azul hoje?")
let carro = prompt("Você andou de carro hoje?")
let almoco = prompt("Você almoçou hoje?")

console.log("Você está usando uma roupa azul hoje?", roupa)
console.log("Você andou de carro hoje?", carro)
console.log("Você almoçou hoje?", almoco)
*/

/* 
// Exercício 3 escrita

let a = 50
let b = 100
console.log(a, b) // Valores iniciais
let valorSalvo = b
b = a
a = valorSalvo
console.log(a, b) // Valores finais
*/

/*
// Desafio

let valor1 = prompt("Digite o primeiro número: ")
let valor2 = prompt("Digite o segundo número: ")

let num1 = Number(valor1)
let num2 = Number(valor2)

let soma = Number(valor1) + Number(valor2)
let produto = Number(valor1) * Number(valor2)


console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", produto)
*/