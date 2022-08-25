type Produto = {
    nome: string,
    preco: number,
    classe: ClasseRoupa
}

type ClasseRoupa = "verão" | "inverno" | "banho" | "íntima"

const listaProdutos: Array<Produto> = [
    {
        nome: "Camiseta",
        preco: 40,
        classe: "verão"
    },
    {
        nome: "Casaco",
        preco: 100,
        classe: "inverno"
    },
    {
        nome: "Sunga",
        preco: 20,
        classe: "banho"
    },
    {
        nome: "Cueca",
        preco: 10,
        classe: "íntima"
    },
]

type ProdutoDesconto = Produto & { precoDesconto: string }

function calculaDesconto(produtos: Array<Produto>): Array<ProdutoDesconto> {
    let produtosComDesconto: Array<ProdutoDesconto>
    let indiceDesconto: number
    produtosComDesconto = produtos.map((produto: Produto) => {
        switch(produto.classe) {
            case "verão":
                indiceDesconto = 0.95
                break
            case "inverno":
                indiceDesconto = 0.9
                break
            case "banho":
                indiceDesconto = 0.96
                break
            case "íntima":
                indiceDesconto = 0.93
                break
            default:
                indiceDesconto = 1
                break
        }
        return {
            nome: produto.nome,
            preco: produto.preco,
            classe: produto.classe,
            precoDesconto: `Preço com desconto R$${(produto.preco * indiceDesconto).toFixed(2)}`
        }
    })
    return produtosComDesconto
}

console.log(calculaDesconto(listaProdutos))