/* Exercício 1 interpretação 

let array
console.log('a. ', array)  // a.  undefined

array = null
console.log('b. ', array)  // b.  null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  // c.  11

let i = 0
console.log('d. ', array[i])  // d.  3

array[i+1] = 19
console.log('e. ', array)  // e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)  // f.  9

*/

/*  Exercício 2 interpretação 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ÔNIBUS EM MIRROCOS 27 

*/

/* Exercício 1 escrita 

const nomeDoUsuario = prompt("Digite seu nome:")
const emailDoUsuario = prompt("Digite seu e-mail:")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

*/

/* Exercício 2 escrita 

let listaComidas = ["Churrasco", "Estrogonofe", "Feijoada", "Frango à parmegiana", "Hambúrguer"]

console.log(`a. ${listaComidas}`)
console.log(`b. Essas são minhas comidas preferidas: `)
console.log(` - ${listaComidas[0]}`)
console.log(` - ${listaComidas[1]}`)
console.log(` - ${listaComidas[2]}`)
console.log(` - ${listaComidas[3]}`)
console.log(` - ${listaComidas[4]}`)

const comidaUsuario = prompt("Digite sua comida preferida: ")
listaComidas[1] = comidaUsuario
console.log(`c. Nova lista de comidas: `)
console.log(` - ${listaComidas[0]}`)
console.log(` - ${listaComidas[1]}`)
console.log(` - ${listaComidas[2]}`)
console.log(` - ${listaComidas[3]}`)
console.log(` - ${listaComidas[4]}`)

*/

/* Exercício 3 escrita 

let listaDeTarefas = []
listaDeTarefas.push(prompt("Digite a primeira tarefa: "))
listaDeTarefas.push(prompt("Digite a segunda tarefa: "))
listaDeTarefas.push(prompt("Digite a terceira tarefa: "))

console.log(listaDeTarefas)

const indice = Number(prompt("Digite o índice da tarefa realizada: "))
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)

*/

/* Desafio 1 

let frase = prompt("Digite uma frase: ")
frase = frase.trim()

let arrayPalavras = frase.split(" ")
console.log(arrayPalavras)

*/

/* Desafio 2 

const listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const indiceFrutas = listaFrutas.indexOf("Abacaxi")
const tamanhoFrutas = listaFrutas.length
console.log(`O índice da palavra Abacaxi é ${indiceFrutas} e o tamanho do array é ${tamanhoFrutas}`)

*/