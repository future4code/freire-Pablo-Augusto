// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retângulo:"))
  const largura = Number(prompt("Digite a largura do retângulo:"))

  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o seu ano de nascimento:"))
  const idade = anoAtual - anoNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu e-mail:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const listaCores = []
  listaCores.push(prompt("Digite sua primeira cor favorita:"))
  listaCores.push(prompt("Digite sua segunda cor favorita:"))
  listaCores.push(prompt("Digite sua terceira cor favorita:"))

  console.log(listaCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const numeroMinimoIngressos = Number((custo/valorIngresso).toFixed(0))

  return numeroMinimoIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const valorGuardado = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = valorGuardado

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = prompt("Digite o ano atual:")
  const anoNascimento = prompt("Digite o ano de nascimento:")
  const anoEmissao = prompt("Digite o ano da emissão da identidade:")

  const idade = anoAtual - anoNascimento
  const tempoEmissao = anoAtual - anoEmissao

  const condicao1 = idade <= 20 && tempoEmissao >= 5
  const condicao2 = idade > 20 && idade <= 50 && tempoEmissao >= 10
  const condicao3 = idade > 50 && tempoEmissao >= 15
  const solucao = condicao1 || condicao2 || condicao3

  console.log(solucao)
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  const condicao1 = ano % 400 === 0
  const condicao2 = ano % 4 === 0
  const condicao3 = ano % 100 === 0
  const solucao = (condicao1) || (condicao2 && !(condicao3 && !condicao1) )

  return solucao

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const maiorDe18 = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  solucao = (maiorDe18 === "sim") && (ensinoMedio === "sim") && (disponibilidade === "sim")

  console.log(solucao)

}