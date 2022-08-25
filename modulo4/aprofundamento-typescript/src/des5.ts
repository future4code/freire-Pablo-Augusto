type Consulta = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}

const listaConsultas: Array<Consulta> = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

function consultasOrdemAlfabeitca(consultas: Array<Consulta>): Array<Consulta> {
    const consultasOrdenadas: Array<Consulta> = consultas.sort(
        (a: Consulta, b: Consulta): number => {
            if (a.nome < b.nome) {
                return -1
            } else {
                return 1
            }
        }
    )
    return consultasOrdenadas
}

console.log(listaConsultas)
console.log(consultasOrdemAlfabeitca(listaConsultas))