export type Transacao = {
    valor: number,
    data: number,
    descricao: string
}

export type Conta = {
    nome: string,
    cpf: string,
    dataNascimento: string,
    idade: number,
    extrato: Transacao[],
    saldo: number
}

export const contas: Conta[] = [
    {
        nome: "Pablo Leão",
        cpf: "111.111.111-11",
        dataNascimento: "30/04/1992",
        idade: 30,
        extrato: [
            {
                valor: 4300,
                data: 1661062568688,
                descricao: "Remuneração"
            },
            {
                valor: -120,
                data: 1661062673279,
                descricao: "Compras Mercado Hortifruti"
            },
            {
                valor: 3000,
                data: 1661062739187,
                descricao: "Pix de Beatriz"
            },
            {
                valor: -4500,
                data: 1661062823609,
                descricao: "Compra Magalu PS5"
            }
        ],
        saldo: 2680
    },
    {
        nome: "Bia Rios",
        cpf: "222.222.222-22",
        dataNascimento: "01/04/1993",
        idade: 29,
        extrato: [
            {
                valor: 8000,
                data: 1661062568688,
                descricao: "Remuneração"
            },
            {
                valor: -890,
                data: 1661062673279,
                descricao: "Compra MAC Cosmetics"
            },
            {
                valor: -1500,
                data: 1661062739187,
                descricao: "Compra Zara"
            }
        ],
        saldo: 5610
    }
]