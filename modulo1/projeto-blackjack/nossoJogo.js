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

// Blackjack

function jogarBlackjack() {
   console.log("Boas vindas ao jogo de Blackjack!")
   if (confirm("Quer iniciar uma nova rodada ?")) {
      
      const cartasUsuario = [comprarCarta(), comprarCarta()]
      const cartasComputador = [comprarCarta(), comprarCarta()]

      const pontosUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
      const pontosComputador = cartasComputador[0].valor + cartasComputador[1].valor

      console.log(`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}  - pontuação ${pontosUsuario}`)
      console.log(`Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto}  - pontuação ${pontosComputador}`)

      if (pontosUsuario > pontosComputador) {
         console.log("O usuário ganhou!")
      } else if (pontosUsuario < pontosComputador) {
         console.log("O computador ganhou!")
      } else {
         console.log("Empate!")
      }

   } else {
      console.log("O jogo acabou!")
   }
}

jogarBlackjack()