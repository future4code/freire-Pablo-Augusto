// a)

type Ingredientes = Array<string>

type Prato = {
    nome: string,
    custo: number,
    precoVenda: number,
    ingredientes: Ingredientes
}

const pratos: Array<Prato> = [
    {
        nome: "Estrogonofe de Carne",
        custo: 10,
        precoVenda: 25,
        ingredientes: ["Arroz", "Batata frita", "Carne", "Molho"]
    },
    {
        nome: "Estrogonofe de Frango",
        custo: 8,
        precoVenda: 25,
        ingredientes: ["Arroz", "Batata frita", "Frango", "Molho"]
    },
    {
        nome: "Lasanha",
        custo: 5,
        precoVenda: 20,
        ingredientes: ["Queijo", "Presunto", "Molho de tomate"]
    }
]

function cadastrarProdutos(novoPrato: Prato): void {
    pratos.push(novoPrato)
}

console.log(pratos)
cadastrarProdutos({
    nome: "Carne moída",
    custo: 6,
    precoVenda: 22,
    ingredientes: ["Arroz", "Feijão", "Purê de batata", "Carne"]
})
console.log(pratos)

// b)

function verificarPreco(nome: string, pratos: Array<Prato>): number {
    const listaFiltrada = pratos.filter((prato: Prato) => {
        return prato.nome === nome
    })
    return listaFiltrada[0].precoVenda
}

const precoPrato = verificarPreco("Lasanha", pratos)

console.log(`O valor do prato é R$${precoPrato.toFixed(2)}`)

// c)

const vendas: Array<Prato> = []

function venderPrato(nome: string, listaPratos: Array<Prato>): void {
    const listaFiltrada = listaPratos.filter((prato: Prato) => {
        return prato.nome === nome
    })
    vendas.push(listaFiltrada[0])
}

console.log(vendas)
venderPrato("Estrogonofe de Carne", pratos)
venderPrato("Lasanha", pratos)
venderPrato("Carne moída", pratos)
console.log(vendas)

// d)

function calcularLucro(vendas: Array<Prato>): number {
    let lucro: number = 0
    for (let venda of vendas) {
        lucro += (venda.precoVenda - venda.custo)
    }
    return lucro
}

console.log(`O lucro do restaurante é de R$${calcularLucro(vendas).toFixed(2)}`)