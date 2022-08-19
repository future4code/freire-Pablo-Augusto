// Exercício 1
// a) Vai dar erro porque os tipos são incompatíveis
//
// const minhaString: string = 10

// b) Utilizando o Union Type como mostrado abaixo

// let meuNumero: number | string = 10

// c) Código abaixo

enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: Pessoa = {
    nome: "Pablo",
    idade: 30,
    corFavorita: Cores.VERDE
}
const pessoa2: Pessoa = {
    nome: "Bia",
    idade: 29,
    corFavorita: Cores.VIOLETA
}
const pessoa3: Pessoa = {
    nome: "Teca",
    idade: 11,
    corFavorita: Cores.AZUL
}

console.table(pessoa1)
console.table(pessoa2)
console.table(pessoa3)