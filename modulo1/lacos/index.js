/* Exercício 1 interpretação 

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// O código acima usa uma estrutura de repetição para imprimir a soma dos valores de 0 até 4: 0 + 1 + 2 + 3 + 4 = 10

*/

/* Exercício 2 interpretação 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
		console.log(numero)
    }
}

// a) No console vão ser impressos os seguintes valores: 19, 21, 23, 25, 27, 30. Um em cada linha.
// b) Se utilizarmos o for em vez de for...of, podemos criar uma variável i por exemplo que acessará os índices de todos os elementos dessa lista.

*/

/* Exercício 3 interpretação 

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// O resultado no console seria:
// *
// **
// ***
// ****

*/

/* Exercício 1 escrita 

const pets = Number(prompt("Quantos pets você tem?"))

if (pets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    let listaPets =[]
    for (let i = 0; i < pets; i++) {
        listaPets.push(prompt("Digite o nome do pet:"))    
    }

console.log(listaPets)
}

*/

/* Exercício 2 escrita 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// item a
function imprimeValores(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

imprimeValores(arrayOriginal)

// item b
function dividePorDez(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] / 10)
    }
}

dividePorDez(arrayOriginal)

// item c
function imprimeNumerosPares(array) {
    let listaPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            listaPares.push(array[i])
        }
    }
    console.log(listaPares)
}

imprimeNumerosPares(arrayOriginal)

// item d
function criaArrayString(array) {
    let arrayString = []
    for (let i = 0; i < array.length; i++) {
        arrayString.push(`O elemento do índex ${i} é: ${array[i]}`)
    }
    console.log(arrayString)
}

criaArrayString(arrayOriginal)

// item e
function maiorEMenor(array) {
    let maior = array[0]
    let menor = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    console.log(`O maior número é ${maior} e o menor é ${menor}`)

}

maiorEMenor(arrayOriginal)

*/

/* Desafio 1 /

const numero = Number(prompt("Jogador n° 1, insira um número:"))
let chute
let tentativas = 0
console.log("Vamos jogar!")

while (chute !== numero) {
    chute = Number(prompt("Jogador n° 2, tente acertar o número:"))
    tentativas++
    console.log(`O número chutado foi: ${chute}`)
    if (chute < numero) {
        console.log("Errrrrrrrou, é maior")
    } else if (chute > numero) {
        console.log("Errrrrrrrou, é menor")
    } else {
        console.log("Acertou!!")
        console.log(`O número de tentativas foi: ${tentativas}`)
    }
}

*/

/* Desafio 2 

// O número agora passa a ser gerado pelo computador
const numeroAleatorio = (Math.floor(Math.random() * 100)) + 1

let chute
let tentativas = 0
console.log("Vamos jogar!")

while (chute !== numeroAleatorio) {
    chute = Number(prompt("Humano, tente acertar o número! Você nunca vai descobrir!!"))
    tentativas++
    console.log(`O número chutado foi: ${chute}`)
    if (chute < numeroAleatorio) {
        console.log("Errrrrrrrou, é maior")
    } else if (chute > numeroAleatorio) {
        console.log("Errrrrrrrou, é menor")
    } else {
        if (tentativas === 1) {
            console.log("Eita, acertou!! Tu é o bixão mermo hein doido! :O")
        } else {
            console.log("Acertou!! Mas demorou muito!! Humano fraco!!")
        }
        console.log(`O número de tentativas foi: ${tentativas}`)
        
    }
}

// Achei tranquilo fazer a mudança. A primeira vez que vi o método Math.random() foi um pouco complicado de manipular o número real que é gerado para satisfazer uma condição, por exemplo: gerar um número aleatório de 1 a 10. O método Math.floor() ajuda nessa manipulação porque ele pega a parte inteira de um número real, a partir disso fica mais tranquilo.

// Deu até pra fazer uma pequena mudança no final :)     1 em 100 tenta lá !!

*/