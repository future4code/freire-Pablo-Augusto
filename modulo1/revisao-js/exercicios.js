// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    // return array.reverse()

    let arrayInvertido = []
    for (let i = (array.length - 1); i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    // return array.sort((item1, item2) => {
    //     return item1 - item2
    // })
    
    for (let j = array.length - 1; j >= 1; j--) {
        for (let i = 0; i < j; i++) {
            if (array[i + 1] < array[i]) {
                let valorGuardado = array[i + 1]
                array[i + 1] = array[i]
                array[i] = valorGuardado
            }
        }
    }
        
    return array

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    // const arrayPares = array.filter((item) => {
    //     return item % 2 === 0
    // })
    // return arrayPares

    const arrayPares = []
    for (let item of array) {
        if (item % 2 === 0) {
            arrayPares.push(item)
        }
    }
    return arrayPares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let arrayPares = retornaNumerosPares(array)

    const arrayElevado = arrayPares.map((item) => {
        return item * item
    }) 

    return arrayElevado

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let maiorValor = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i]
        }
    }

    return maiorValor

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maior, menor
    if (num1 > num2) {
        maior = num1
        menor = num2
    } else {
        maior = num2
        menor = num1
    }

    return {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor === 0,
        diferenca: maior - menor
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
    const numerosPares = []
    for (let i = 0; i < n; i++) {
        numerosPares.push(i * 2)
    }

    return numerosPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    let condicao1 = ladoA === ladoB
    let condicao2 = ladoA === ladoC
    let condicao3 = ladoB === ladoC

    if (condicao1 && condicao2 && condicao3) {
        return "Equilátero"
    } else if (!condicao1 && !condicao2 && !condicao3) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    let maior = array[0]
    let menor = array[0]
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
        if (array[i] < menor) {
            menor = array[i]
        }
    }

    let segundoMaior = menor
    let segundoMenor = maior

    for (let i = 1; i < array.length; i++) {
        if (array[i] > segundoMaior && array[i] < maior) {
            segundoMaior = array[i]
        }
        if (array[i] < segundoMenor && array[i] > menor) {
            segundoMenor = array[i]
        }
    }

    return [segundoMaior, segundoMenor]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
    let elenco = filme.atores.toString()
    elenco = elenco.replaceAll(",", ", ")

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${elenco}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    const pessoaAnonima = {
        ...pessoa,
        nome: "ANÔNIMO"
    }

    return pessoaAnonima

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        
        const temAlturaMinima = pessoa.altura >= 1.5
        const temIdadeAdequada = pessoa.idade > 14 && pessoa.idade < 60

        return temAlturaMinima && temIdadeAdequada
    })

    return pessoasAutorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    const pessoasAutorizadas = retornaPessoasAutorizadas(pessoas)

    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        return pessoasAutorizadas.includes(pessoa) === false
    })

    return pessoasNaoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
    const contasSaldoAtualizado = contas.map((conta) => {
        
        totalCompras = 0
        repeticoes = conta.compras.length
        for (let i = 0; i < repeticoes; i++) {
            totalCompras += conta.compras.pop() 
        }

        conta.saldoTotal -= totalCompras
        
        return {
            cliente: conta.cliente,
            saldoTotal: conta.saldoTotal,
            compras: conta.compras
        }
    })

    return contasSaldoAtualizado

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    const listaNomes = consultas.map((consulta) => {
        return consulta.nome
    })
    listaNomes.sort()

    let consultasOrdemAlfabetica = []

    for (let nome of listaNomes) {
        let entrada = consultas.filter((consulta) => {
            return consulta.nome === nome
        })
        consultasOrdemAlfabetica.push(entrada[0])
    }

    return consultasOrdemAlfabetica

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

    const listaDatas = consultas.map((consulta) => {
        return consulta.dataDaConsulta
    })

    let listaDatasInvertidas = []

    for (let i = 0; i < listaDatas.length; i++) {
        listaDatasInvertidas.push(listaDatas[i].split("/").reverse().toString().replaceAll(",", "/"))
    }
    
    listaDatasInvertidas.sort()
    let listaDatasOrdenadas = []
    
    for (let i = 0; i < listaDatasInvertidas.length; i++) {
        listaDatasOrdenadas.push(listaDatasInvertidas[i].split("/").reverse().toString().replaceAll(",", "/"))
    }

    let consultasOrdemData = []

    for (let data of listaDatasOrdenadas) {
        let entrada = consultas.filter((consulta) => {
            return consulta.dataDaConsulta === data
        })
        consultasOrdemData.push(entrada[0])
    }

    return consultasOrdemData

}