// Exercício 2

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// a) A função recebe como entrada uma lista de números e 
// retorna um objeto chamado estatisticas

type Dados = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Dados {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number): number => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Dados = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: Dados
}

const amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas([21, 18, 65, 44, 15, 18])
}

console.log(amostraDeIdades.numeros)
console.log(amostraDeIdades.obterEstatisticas)