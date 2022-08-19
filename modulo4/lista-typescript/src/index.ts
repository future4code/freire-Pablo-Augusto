// Exercício 1
console.log("Exercício 1\n")

function saudacao(nome: string, dataNascimento: string): string {

    const arrayData: Array<string> = dataNascimento.split('/')
    const dia: string = arrayData[0]
    const mes: string = arrayData[1]
    const ano: string = arrayData[2]

    return `Olá, me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
}

console.log(saudacao("Pablo", "30/04/1992"))

// Exercício 2
console.log("\n--------------------------------------")
console.log("Exercício 2\n")

function exibeTipo(variavel: any): void {
    console.log(typeof variavel)
}

const var1 = "Oi"
const var2 = 10
const var3 = true
exibeTipo(var1)
exibeTipo(var2)
exibeTipo(var3)

// Exercício 3
console.log("\n--------------------------------------")
console.log("Exercício 3\n")

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao?: number
}

function retornaFilme(nome: string, ano: number, genero: GENERO, pontuacao?: number): Filme {
    const filme = {
        nome: nome,
        ano: ano,
        genero: genero,
        pontuacao: pontuacao
    }
    
    return filme
}

console.log(retornaFilme("Duna", 2021, GENERO.ACAO, 74))
console.log(retornaFilme("Lightyear", 2022, GENERO.COMEDIA))

// Exercício 4
console.log("\n--------------------------------------")
console.log("Exercício 4\n")

enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Pessoa = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

const arrayPessoas: Array<Pessoa> = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria", salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete", salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João", salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué", salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia", salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" , salario: 3500, setor: SETOR.MARKETING, presencial: true }
]

function buscarMarketingPresencial(lista: Array<Pessoa>): Array<Pessoa> {
    const listaFiltrada = lista.filter((pessoa: Pessoa) => {
        return pessoa.setor === SETOR.MARKETING && pessoa.presencial === true
    })
    return listaFiltrada
}

const arrayMarketingPresencial = buscarMarketingPresencial(arrayPessoas)
console.log(arrayMarketingPresencial)

// Exercício 5
console.log("\n--------------------------------------")
console.log("Exercício 5\n")

type Usuario = {
    name: string,
    email: string,
    role: "user" | "admin"
}

const arrayUsuarios: Array<Usuario> = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

function buscarEmailAdmin(lista: Array<Usuario>): Array<string> {
    const listaFiltrada = lista.filter((usuario: Usuario) => {
        return usuario.role === "admin"
    }).map((usuario: Usuario) => {
        return usuario.email
    })
    return listaFiltrada
}

const listaEmailsAdmins = buscarEmailAdmin(arrayUsuarios)
console.log(listaEmailsAdmins)

// Exercício 6
console.log("\n--------------------------------------")
console.log("Exercício 6\n")

type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: Array<number>
}

const listaClientesBanco: Array<Cliente> = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function verificaSaldoNegativo(lista: Array<Cliente>): Array<Cliente> {
    const listaFiltrada = lista.map((cliente: Cliente) => {
        let totalDebitos = 0
        for (let debito of cliente.debitos) {
            totalDebitos += debito
        }
        return {
            cliente: cliente.cliente,
            saldoTotal: cliente.saldoTotal - totalDebitos,
            debitos: []
        }
    }).filter((cliente: Cliente) => {
        return cliente.saldoTotal < 0
    })

    return listaFiltrada
}

const clientesSaldoNegativo = verificaSaldoNegativo(listaClientesBanco)
console.log(clientesSaldoNegativo)

// Exercício 7
console.log("\n--------------------------------------")
console.log("Exercício 7\n")

type Produto = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

function ajustaPreco(preco :number): string {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const estoqueEmpresa: Array<Produto> = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function convertePrecosEstoque(lista: Array<Produto>): Array<Produto> {
    const listaConvertida = lista.map((produto: Produto) => {
        return {
            ...produto,
            valorUnitario: ajustaPreco(produto.valorUnitario as number)
        }
    }).sort((a, b) => {
        return a.quantidade - b.quantidade
    })

    return listaConvertida
}

console.log(convertePrecosEstoque(estoqueEmpresa))

// Exercício 8
console.log("\n--------------------------------------")
console.log("Exercício 8\n")

function formataData(data: string): number {
    const arrayDataString = data.split('/')
    const arrayDataNumber = [Number(arrayDataString[2]), Number(arrayDataString[1]), Number(arrayDataString[0])]
    const dataFormatada = new Date(arrayDataNumber[0], arrayDataNumber[1], arrayDataNumber[2])
    return dataFormatada.getTime()
}

function verificaRenovacaoRG(dataNascimento: string, dataEmissaoRG: string ): boolean {
    const dataAtual = new Date().getTime()
    const dataNascimentoFormatada = formataData(dataNascimento)
    const dataEmissaoRGFormatada = formataData(dataEmissaoRG)
    
    const idade = dataAtual - dataNascimentoFormatada
    const tempoCarteira = dataAtual - dataEmissaoRGFormatada
   
    if(idade <= 630720000000 ) {
        return tempoCarteira >= 157680000000
    
    } else if(idade >= 630720000000 || idade <= 1576800000000) {
        return tempoCarteira >= 315360000000
    
    } else if(idade > 1576800000000) {
        return tempoCarteira >= 473040000000
    }
}

console.log(verificaRenovacaoRG("30/04/1992", "10/05/2010"))

// Exercício 9
console.log("\n--------------------------------------")
console.log("Exercício 9\n")

function contaAnagramas(palavra: string): number {
    let resultado: number = 1
    if (palavra.length === 0) {
        return resultado
    } else {
        for (let i = 1; i <= palavra.length; i++) {
            resultado *= i
        }
        return resultado
    }    
}

console.log(contaAnagramas("mesa"))

// Exercício 10
console.log("\n--------------------------------------")
console.log("Exercício 10\n")

function validaCPF(cpf: string): boolean {
    const cpfFormatado: string = cpf.replace('.','').replace('.','').replace('-','')
    if (
        cpfFormatado === "00000000000" ||
        cpfFormatado === "11111111111" ||
        cpfFormatado === "22222222222" ||
        cpfFormatado === "33333333333" ||
        cpfFormatado === "44444444444" ||
        cpfFormatado === "55555555555" ||
        cpfFormatado === "66666666666" ||
        cpfFormatado === "77777777777" ||
        cpfFormatado === "88888888888" ||
        cpfFormatado === "99999999999"
    ) {
        return false
    } else {
        let D1: number = 0
        for(let i = 0, j = 10; i < cpfFormatado.length - 2; i++, j--) {
            D1 += Number(cpfFormatado[i]) * j        
        }
        D1 = D1 % 11
        D1 = 11 - D1
        if (D1 >= 10) {
            D1 = 0
        }
        if (D1 !== Number(cpfFormatado[9])) {
            return false
        } else {
            let D2: number = 0
            for(let i = 0, j = 11; i < cpfFormatado.length - 1; i++, j--) {
                D2 += Number(cpfFormatado[i]) * j
            }
            D2 = D2 % 11
            D2 = 11 - D2
            if (D2 >= 10) {
                D2 = 0
            }
            if (D2 !== Number(cpfFormatado[10])) {
                return false
            } else {
                return true
            }
        }
    }
    
}

console.log(validaCPF("111.111.111-11"))
console.log(validaCPF("145.382.206-20"))

// Exercício 11
console.log("\n--------------------------------------")
console.log("Exercício 11\n")

type Comparador = {
    valorRomano: string,
    valorDecimal: number
}

const tabelaConversao: Array<Comparador> = [
    {valorRomano: "M", valorDecimal: 1000},
    {valorRomano: "CM", valorDecimal: 900},
    {valorRomano: "D", valorDecimal: 500},
    {valorRomano: "CD", valorDecimal: 400},
    {valorRomano: "C", valorDecimal: 100},
    {valorRomano: "XC", valorDecimal: 90},
    {valorRomano: "L", valorDecimal: 50},
    {valorRomano: "XL", valorDecimal: 40},
    {valorRomano: "X", valorDecimal: 10},
    {valorRomano: "IX", valorDecimal: 9},
    {valorRomano: "V", valorDecimal: 5},
    {valorRomano: "IV", valorDecimal: 4},
    {valorRomano: "I", valorDecimal: 1}
]

function converteParaRomanos(numero: number): string {
    let numeroRomano: string = ""
    let i: number = 0
    while(numero > 0) {
        numero -= tabelaConversao[i].valorDecimal
        if (numero < 0) {
            numero += tabelaConversao[i].valorDecimal
            i++
        } else {
            numeroRomano += tabelaConversao[i].valorRomano
        }
    }
    return numeroRomano
}

console.log(converteParaRomanos(1990));
