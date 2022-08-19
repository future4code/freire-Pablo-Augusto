function validarCadastroLabenu(
    idade: number,
    ensinoMedio: boolean,
    horasDisponiveis: number,
    opcaoCurso: string
): boolean {
    const condicao1: boolean = idade >= 18
    const condicao2: boolean = ensinoMedio
    const condicao3: boolean = (opcaoCurso === 'integral' && horasDisponiveis >= 40) || (opcaoCurso === 'noturno' && horasDisponiveis >= 20)

    return condicao1 && condicao2 && condicao3
}

console.log(validarCadastroLabenu(30, true, 50, 'integral'))