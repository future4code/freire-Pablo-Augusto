/* Exercício 1 interpretação

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])                          // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])    // Virginia Cavendish
console.log(filme.transmissoesHoje[2])                // {canal: "Globo", horario: "14h"}

*/

/* Exercício 2 interpretação

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)      // {nome: "Juca", idade: 3, raca: "SRD"}
console.log(gato)          // {nome: "Juba", idade: 3, raca: "SRD"}
console.log(tartaruga)     // {nome: "Jubo", idade: 3, raca: "SRD"}

// A sintaxe de 3 pontos antes do objeto faz um spread. É uma cópia do objeto cujo nome vem depois dos 3 pontos.

*/

/* Exercício 3 interpretação 

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))   //  false
console.log(minhaFuncao(pessoa, "altura"))      //  undefined

// Na primeira vez que a função é chamada ela retorna o valor de uma propriedade já existente no objeto. Já na segunda vez, ela cria uma propriedade chamada "altura" mas não atribui nenhum valor a ela, então o JavaScript retorna undefined.

*/

/* Exercício 1 escrita */

const pessoa = {
    nome: "Pablo", 
    apelidos: ["Pablin", "Pablex", "Pablete"]
 }

 function apresentar(pessoa) {
     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)
 }
 apresentar(pessoa)

 const outraPessoa = {
     ...pessoa,
     apelidos: ["Pablósio", "Pablexander", "Mister P"]
 }
 apresentar(outraPessoa)

 /* Exercício 2 escrita */

const pessoa1 = {
    nome: "João",
    idade: 30,
    profissao: "Advogado"
}
const pessoa2 = {
    nome: "Lucas",
    idade: 35,
    profissao: "Médico"
}

function retornaDadosPessoa(pessoa) {
    return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
}

console.log(retornaDadosPessoa(pessoa1))
console.log(retornaDadosPessoa(pessoa2))

/* Exercício 3 escrita */

var carrinho = []

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}
const fruta2 = {
    nome: "Maçã",
    disponibilidade: true
}
const fruta3 = {
    nome: "Pêra",
    disponibilidade: true
}

function adicionaFruta(fruta) {
    carrinho.push(fruta)
}

adicionaFruta(fruta1)
adicionaFruta(fruta2)
adicionaFruta(fruta3)

console.log(carrinho)

/* Desafio 1 */

function pedeDadosUsuario() {
    const nome = prompt("Digite seu nome:")
    const idade = prompt("Digite sua idade:")
    const profissao =prompt("Digite sua profissão:")

    const pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }

    console.log(pessoa)
    console.log(typeof pessoa)

}

pedeDadosUsuario()

/* Desafio 2 */

const filme1 = {
    nome: "Gravity",
    ano: 2013
}
const filme2 = {
    nome: "Interstellar",
    ano: 2014
}

function comparaFilmes(primeiroFilme, segundoFilme) {
    const comparacao1 = primeiroFilme.ano < segundoFilme.ano
    const comparacao2 = primeiroFilme.ano === segundoFilme.ano
    console.log(`O primeiro filme foi lançado antes do segundo? ${comparacao1}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${comparacao2}`)
}

comparaFilmes(filme1, filme2)

/* Desafio 3 */

function alteraDisponibilidade(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade
    return fruta
}

console.log(alteraDisponibilidade(fruta1))