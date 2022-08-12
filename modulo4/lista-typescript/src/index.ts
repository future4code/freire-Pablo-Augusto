// Exercício 1
function saudacao(nome: string, dataNascimento: string): string {

    const arrayData: Array<string> = dataNascimento.split('/')
    const dia: string = arrayData[0]
    const mes: string = arrayData[1]
    const ano: string = arrayData[2]

    return `Olá, me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
}

console.log(saudacao("Pablo", "30/04/1992"))

// Exercício 2
function exibeTipo(variavel: any): void {
    console.log(typeof variavel)
}

const var1 = "Oi"
const var2 = 10
const var3 = true
exibeTipo(var1)
exibeTipo(var2)
exibeTipo(var3)