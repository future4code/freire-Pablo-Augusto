function espelharPalavra(palavra: string): string {
    let arrayPalavra: Array<string>
    arrayPalavra = palavra.split('')
    arrayPalavra = arrayPalavra.reverse()

    const palavraEspelhada: string = arrayPalavra.join('')
    return palavraEspelhada
}

console.log(espelharPalavra('Pablo'))