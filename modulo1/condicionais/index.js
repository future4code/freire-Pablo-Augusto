/* Exercício 1 interpretação 

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a) O código testa se o número digitado pelo usuário é par (divisível por 2)
// b) Para números pares
// c) Para números ímpares

*/

/* Exercício 2 interpretação 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) O código acima recebe uma fruta do usuário e retorna seu preço
// b) "O preço da fruta Maçã é R$ 2.25"
// c) "O preço da fruta Pêra é R$ 5"

*/

/* Exercício 3 interpretação 

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) A primeira linha pede para o usuário digitar um número, recebe o String fornecido por ele, converte para o tipo Number e aloca esse valor na variável numero.
// b) Caso o número digitado seja 10 o console imprime "Esse número passou no teste" e dá um erro.
//    Se o número for -10 o console só retorna um erro.
// c) Sim. A variável mensagem é declarada no escopo do if, então ela não existe fora dele.

*/

/* Exercício 1 escrita */

// const idade = Number(prompt("Digite sua idade:"))

// if (idade >= 18) {
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você NÃO pode dirigir!")
// }

/* Exercício 2 escrita */

// const turno = prompt("Digite o turno em que você estuda: (M)atutino / (V)espertino / (N)oturno").toUpperCase()

// if (turno === "M") {
//     console.log("Bom Dia!")
// } else if (turno === "V") {
//     console.log("Boa Tarde!")
// } else if (turno === "N") {
//     console.log("Boa Noite!")
// } else {
//     console.log("Turno não encontrado!")
// }

/* Exercício 3 escrita */

// const turno = prompt("Digite o turno em que você estuda: (M)atutino / (V)espertino / (N)oturno").toUpperCase()

// switch (turno) {
//     case "M":
//         console.log("Bom Dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Turno não encontrado!")
//         break;
// }

/* Exercício 4 escrita */

// const generoFilme = prompt("Digite o gênero do filme:").toLowerCase()
// const valorIngresso = Number(prompt("Digite o valor do ingresso:"))

// if (generoFilme === "fantasia" && valorIngresso < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

/* Desafio 1 

const generoFilme = prompt("Digite o gênero do filme:").toLowerCase()
const valorIngresso = Number(prompt("Digite o valor do ingresso:"))

if (generoFilme === "fantasia" && valorIngresso < 15) {
    const lanche = prompt("Qual lanche vai comprar?")
    console.log("Bom filme!")
    console.log(`Aproveite seu/sua ${lanche}!`)
} else {
    console.log("Escolha outro filme :(")
}

*/

/* Desafio 2 

const nome = prompt("Digite o seu nome completo:")
const tipoJogo = prompt("Escolha o tipo do jogo, internacional ou doméstico: (IN/DO)").toUpperCase()
const etapaJogo = prompt("Digite a etapa do jogo, semi-final ou decisão de terceiro lugar ou final: (SF/DT/FI)")
const categoria = Number(prompt("Digite a categoria: (1/2/3/4)"))
const quantidadeIngressos = Number(prompt("Digite a quantidade de ingressos:"))


const mensagemErro = "Valor indevido digitado!"
let internacional = false
let valorIngresso = 0
let valorTotal = 0
let mensagemDadosCompra = `---Dados da compra---\nNome do cliente:  ${nome}\n`


if (tipoJogo === "DO") {
    mensagemDadosCompra += `Tipo do jogo:  Nacional\n`
} else if (tipoJogo === "IN") {
    mensagemDadosCompra += `Tipo do jogo:  Internacional\n`
    internacional = true
}

if (etapaJogo === "DT") {
    mensagemDadosCompra += `Etapa do jogo:  Decisão de Terceiro Lugar\n`
    switch (categoria) {
        case 1:
            valorIngresso += 660
            break
        case 2:
            valorIngresso += 440
            break
        case 3:
            valorIngresso += 330
            break
        case 4:
            valorIngresso += 170
            break
        default:
            console.log(mensagemErro)
            break
    }
} else if (etapaJogo === "SF") {
    mensagemDadosCompra += `Etapa do jogo:  Semi-final\n`
    switch (categoria) {
        case 1:
            valorIngresso += 1320
            break
        case 2:
            valorIngresso += 880
            break
        case 3:
            valorIngresso += 550
            break
        case 4:
            valorIngresso += 220
            break
        default:
            console.log(mensagemErro)
            break
    }
 } else if (etapaJogo === "FI") {
    mensagemDadosCompra += `Etapa do jogo:  Final\n`
    switch (categoria) {
        case 1:
            valorIngresso += 1980
            break
        case 2:
            valorIngresso += 1320
            break
        case 3:
            valorIngresso += 880
            break
        case 4:
            valorIngresso += 330
            break
        default:
            console.log(mensagemErro)
            break
    }
} else {
    console.log(mensagemErro)
}

valorTotal = valorIngresso * quantidadeIngressos

mensagemDadosCompra += `Categoria:  ${categoria}\n`
mensagemDadosCompra += `Quantidade de Ingressos:  ${quantidadeIngressos}\n`


if (internacional) {
    valorIngresso = (valorIngresso / 4.10).toFixed(2)
    valorTotal = (valorTotal / 4.10).toFixed(2)
    mensagemDadosCompra +=`---Valores---\nValor do ingresso:  U$ ${valorIngresso}\n`
    mensagemDadosCompra +=`Valor total:  U$ ${valorTotal}`
} else {
    valorIngresso = valorIngresso.toFixed(2)
    valorTotal = valorTotal.toFixed(2)
    mensagemDadosCompra +=`---Valores---\nValor do ingresso:  R$ ${valorIngresso}\n`
    mensagemDadosCompra +=`Valor total:  R$ ${valorTotal}`
}

console.log(mensagemDadosCompra)

*/