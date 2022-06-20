/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Desafio Blackjack

function sortearCartasIniciais() {

   let cartasSorteadas = [comprarCarta(), comprarCarta()]
   while (cartasSorteadas[0].texto.includes("A") && cartasSorteadas[1].texto.includes("A")) {
      cartasSorteadas = [comprarCarta(), comprarCarta()]
   }
   return cartasSorteadas

}

function calculaPontos(cartasJogador) {

   let pontos = 0
   for (let i = 0; i < cartasJogador.length; i++) {
      pontos += cartasJogador[i].valor
   }
   return pontos

}

function exibeCartas(cartasJogador) {
   
   let cartasExibidas = ""
   for (let i = 0; i < cartasJogador.length; i++) {
      cartasExibidas += ` ${cartasJogador[i].texto}`
   }
   return cartasExibidas

}

function exibeMensagemContinuar(cartasUsuario, cartasComputador) {

   let cartasExibidas = exibeCartas(cartasUsuario)
   return confirm(`Suas cartas são${cartasExibidas}. A carta revelada do computador é ${cartasComputador[0].texto}.\nDeseja comprar mais uma carta?`)

}

function verificaLimitePontos(cartasJogador) {

   pontos = calculaPontos(cartasJogador)
   if (pontos <= 21) {
      return false
   } else {
      return true
   }

}

function computadorJoga(cartasUsuario, cartasComputador) {

   const pontosUsuario = calculaPontos(cartasUsuario)
   let pontosComputador = calculaPontos(cartasComputador)

   while (pontosComputador <= pontosUsuario) {
      cartasComputador.push(comprarCarta())
      pontosComputador = calculaPontos(cartasComputador)
   }

   return cartasComputador

}

function jogarBlackjack() {
   
   if (confirm("Boas vindas ao jogo de Blackjack!\nQuer iniciar uma nova rodada ?")) {
      
      let cartasUsuario = sortearCartasIniciais()
      let cartasComputador = sortearCartasIniciais()
      
      let usuarioContinuaJogando = exibeMensagemContinuar(cartasUsuario, cartasComputador)
      let estourouLimitePontos
      let mensagemFinal
      
      while (usuarioContinuaJogando) {
         cartasUsuario.push(comprarCarta())
         estourouLimitePontos = verificaLimitePontos(cartasUsuario)
         if (estourouLimitePontos) {
            break
         }
         usuarioContinuaJogando = exibeMensagemContinuar(cartasUsuario, cartasComputador)
      }

      if (estourouLimitePontos) {

         mensagemFinal = `Suas cartas são${exibeCartas(cartasUsuario)}. Sua pontuação é ${calculaPontos(cartasUsuario)}.\nAs cartas do computador são${exibeCartas(cartasComputador)}. A pontuação do computador é ${calculaPontos(cartasComputador)}\n`
         alert(`${mensagemFinal}O computador ganhou!`)

      } else {

         cartasComputador = computadorJoga(cartasUsuario, cartasComputador)

         const pontosUsuario = calculaPontos(cartasUsuario)
         const pontosComputador = calculaPontos(cartasComputador)
         const computadorEstourou = verificaLimitePontos(cartasComputador)

         mensagemFinal = `Suas cartas são${exibeCartas(cartasUsuario)}. Sua pontuação é ${pontosUsuario}.\nAs cartas do computador são${exibeCartas(cartasComputador)}. A pontuação do computador é ${pontosComputador}\n`

         if (pontosUsuario > pontosComputador || computadorEstourou) {
            alert(`${mensagemFinal}O usuário ganhou!`)
         } else if (pontosUsuario < pontosComputador) {
            alert(`${mensagemFinal}O computador ganhou!`)
         } else {
            alert(`${mensagemFinal}Empate!`)
         }

      }

   } else {
         console.log("O jogo acabou!")
   }

}

jogarBlackjack()