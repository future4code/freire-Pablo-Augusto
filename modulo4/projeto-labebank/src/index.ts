import express from 'express';
import cors from 'cors';
import { Transacao, contas } from './contas';

const app = express();
app.use(express.json());
app.use(cors());
const cyan = '\u001b[36m';

function calculaSaldo(transacoes?: Transacao[]): number {
    let resultado: number = 0;

    if (transacoes) {
        for (let transacao of transacoes) {
            resultado += transacao.valor
        }
    }

    return resultado;
}

app.listen(3003, () => {
    console.log(cyan+"Server running at http://localhost:3003");
});