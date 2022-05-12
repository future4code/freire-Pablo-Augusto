/* Exercício 1 interpretação 

function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)

    // a) O primeiro imprime 10 e o segundo imprime 50
    // b) Não apareceria nada pois as funções não imprimem nada no console  
    
*/

/* Exercício 2 interpretação 

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// i. true
// ii. true
// iii. true

*/

/* Exercício 1 escrita 

function escreverBio() {
    console.log("Eu sou Pablo, tenho 30 anos, moro no Rio de Janeiro e sou estudante.")
}

const descreverPessoa = function(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}
escreverBio()
descreverPessoa("Gabriel", 29, "Rio de Janeiro", "dentista")

*/

/* Exercício 2 escrita 

const soma = (n1, n2) => {
    return n1 + n2
}
console.log(soma(5, 10))

const primeiroMaior = (n1, n2) => {
    return n1 > n2
}
console.log(primeiroMaior(6, 20))

const numeroPar = (num) => {
    return (num % 2) === 0
}
console.log(numeroPar(5))

const tamanhoMensagem = (msg) => {
    console.log(msg.length)
    console.log(msg.toUpperCase())
}
tamanhoMensagem("eu sou uma mensagem")

*/

/* Exercício 3 escrita 

function somar(n1, n2) {
    return n1 + n2
}

function subtrair(n1, n2) {
    return n1 - n2
}
function multiplicar(n1, n2) {
    return n1 * n2
}
function dividir(n1, n2) {
    return n1 / n2
}

const num1 = Number(prompt("Digite o primeiro número:"))
const num2 = Number(prompt("Digite o segundo múmero:"))

console.log(`Números inseridos: ${num1} e ${num2}`)
console.log(`Soma: ${somar(num1, num2)}`)
console.log(`Diferença: ${subtrair(num1, num2)}`)
console.log(`Multiplicação: ${multiplicar(num1, num2)}`)
console.log(`Divisão: ${dividir(num1, num2)}`)

*/

/* Desafio 1 

const imprimirNoConsole = (msg) => {
    console.log(msg)
}

const somaValores = (n1, n2) => {
    soma = n1 + n2
    imprimirNoConsole(soma)
}

somaValores(3, 4)

*/

/* Desafio 2 

function calcularHipotenusa(cateto1, cateto2) {
    hipotenusa = Math.sqrt(cateto1*cateto1 + cateto2*cateto2)
    return hipotenusa
}

console.log(calcularHipotenusa(3, 4))

*/