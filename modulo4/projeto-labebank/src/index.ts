import express from 'express';
import cors from 'cors';
import { Transacao, contas, Conta } from './contas';

const app = express();
app.use(express.json());
app.use(cors());
const cyan = '\u001b[36m';

function calculaSaldo(transacoes?: Transacao[]): number {
    let resultado: number = 0;

    if (transacoes) {
        for (let transacao of transacoes) {
            resultado += transacao.valor;
        }
    }

    return resultado;
}

function formataData(data: string): number {
    const arrayDataString = data.split('/');
    const arrayDataNumber = [Number(arrayDataString[2]), Number(arrayDataString[1]) - 1, Number(arrayDataString[0])];
    const dataFormatada = new Date(arrayDataNumber[0], arrayDataNumber[1], arrayDataNumber[2]);
    return dataFormatada.getTime();
}

function calculaIdade(dataNascimento: number): number {
    const dataAtual = Date.now();
    const idadeMS = dataAtual - dataNascimento;
    const idade = Math.floor(((((idadeMS/1000)/60)/60)/24)/365.25);
    return idade;
}

app.get('/users', (req, res) => {
    res.status(200).send(contas)
})

app.post('/users', (req, res) => {
    const { nome, cpf, dataNascimento } = req.body;
    const idade = calculaIdade(formataData(dataNascimento));

    try {
        if (idade < 18) {
            throw new Error("Só são aceitas idades maiores ou iguais a 18.");
        }
        
        const novaConta: Conta = {
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            idade: idade,
            extrato : [],
            saldo: 0
        }
        contas.push(novaConta);
        res.status(201).send(contas);

    } catch(error: any) {
        switch (error.message) {
            case "Só são aceitas idades maiores ou iguais a 18.":
                res.status(422).send({mensagem: error.message});
                break;
            default:
                res.status(500).send({mensagem: "Erro inesperado!"});
                break;
        }
    }

});

app.listen(3003, () => {
    console.log(cyan+"Server running at http://localhost:3003");
});