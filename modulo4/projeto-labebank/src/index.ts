import express from 'express';
import cors from 'cors';
import { Transacao, contas, Conta } from './contas';

const app = express();
app.use(express.json());
app.use(cors());
const cyan = '\u001b[36m';

function formataData(data: string): number {
    const arrayDataString = data.split('/');
    const arrayDataNumber = [Number(arrayDataString[2]), Number(arrayDataString[1]) - 1, Number(arrayDataString[0])];
    const dataFormatada = new Date(arrayDataNumber[0], arrayDataNumber[1], arrayDataNumber[2]);
    return dataFormatada.getTime();
}

function calculaIdade(dataNascimento: number): number {
    const dataAtual = Date.now();
    const idadeMS = dataAtual - dataNascimento;
    const idade = Math.floor(((((idadeMS / 1000) / 60) / 60) / 24) / 365.25);
    return idade;
}

app.get('/users', (req, res) => {
    res.status(200).send(contas);
});

app.get('/users/:cpf/saldo', (req, res) => {
    const cpf = req.params.cpf;
    const conta = contas.find(conta => conta.cpf === cpf);

    try {
        if (!conta) {
            throw new Error("O cpf inserido não está cadastrado.");
        }

        res.status(200).send({ saldo: conta.saldo });

    } catch (error: any) {
        switch (error.message) {
            case "O cpf inserido não está cadastrado.":
                res.status(404).send({ mensagem: error.message });
                break;
            default:
                res.status(500).send("Erro inesperado!");
                break;
        }
    }
});

app.post('/users', (req, res) => {
    const { nome, cpf, dataNascimento } = req.body;
    const idade = calculaIdade(formataData(dataNascimento));
    const cpfJaCadastrado = contas.find(conta => conta.cpf === cpf);

    try {
        if (idade < 18) {
            throw new Error("Só são aceitas idades maiores ou iguais a 18.");
        }
        if (cpfJaCadastrado) {
            throw new Error("O cpf inserido já foi cadastrado.");
        }

        const novaConta: Conta = {
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            idade: idade,
            extrato: [],
            saldo: 0
        }
        contas.push(novaConta);
        res.status(201).send(contas);

    } catch (error: any) {
        switch (error.message) {
            case "Só são aceitas idades maiores ou iguais a 18.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "O cpf inserido já foi cadastrado.":
                res.status(409).send({ mensagem: error.message });
                break;
            default:
                res.status(500).send({ mensagem: "Erro inesperado!" });
                break;
        }
    }

});

app.post('/users/:cpf/pagamento', (req, res) => {
    const cpf = req.params.cpf;
    const indiceConta = contas.findIndex(conta => conta.cpf === cpf);
    const { dataVencimento, descricao, valor } = req.body;

    try {
        if (indiceConta < 0) {
            throw new Error("Não existe um cliente cadastrado com esse CPF.");
        }

        if (!descricao || !valor) {
            throw new Error("Algum valor não foi preenchido. Verifique os dados de descricao ou valor.");
        }

        if (isNaN(valor)) {
            throw new Error("A propriedade valor deve ser do tipo number.");
        }

        if (valor <= 0) {
            throw new Error("A propriedade valor deve ser maior que 0.")
        }

        if (valor > contas[indiceConta].saldo) {
            throw new Error("Saldo insuficiente para fazer o pagamento.")
        }

        const dataAtual = Date.now();
        let dataFormatada: number;
        if (dataVencimento) {
            dataFormatada = formataData(dataVencimento);
        } else {
            dataFormatada = Date.now();  
        }
        
        if (dataFormatada < dataAtual) {
            throw new Error("A data de vencimento já passou. A conta não pode estar vencida.");
        }

        const transacao: Transacao = {
            valor: (-1) * valor,
            data: dataFormatada,
            descricao: descricao
        }

        contas[indiceConta].extrato.push(transacao);
        res.status(201).send("Pagamento realizado.");

    } catch (error: any) {
        switch (error.message) {
            case "Algum valor não foi preenchido. Verifique os dados de descricao ou valor.":
                res.status(400).send({ mensagem: error.message });
                break;
            case "A propriedade valor deve ser do tipo number.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "A propriedade valor deve ser maior que 0.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "A data de vencimento já passou. A conta não pode estar vencida.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "Saldo insuficiente para fazer o pagamento.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "Não existe um cliente cadastrado com esse CPF.":
                res.status(404).send({ mensagem: error.message });
                break;
            default:
                res.status(500).send("Erro inesperado!");
                break;
        }
    }
});

app.post('/users/:cpf/transferencia', (req, res) => {
    const cpf = req.params.cpf;
    const { nome, nomeDestinatario, cpfDestinatario, valor } = req.body;
    
    try {
        if(!cpf || !nome || !nomeDestinatario || !cpfDestinatario || !valor) {
            throw new Error("Algum valor não foi preenchido. Verifique os dados de cpf, nome, nomeDestinatario, cpfDestinatario ou valor.");
        }
        
        const indiceConta = contas.findIndex(conta => conta.cpf === cpf && conta.nome.toLowerCase() === nome.toLowerCase());
        if (indiceConta < 0) {
            throw new Error("Não existe um cliente cadastrado com esse CPF e nome. Verifique o cliente emissor.");
        }

        const indiceContaDestinatario = contas.findIndex(conta => conta.cpf === cpfDestinatario && conta.nome.toLowerCase() === nomeDestinatario.toLowerCase());
        if (indiceContaDestinatario < 0) {
            throw new Error("Não existe um cliente cadastrado com esse CPF e nome. Verifique o cliente destinatário.");
        }

        if (isNaN(valor)) {
            throw new Error("A propriedade valor deve ser do tipo number.");
        }

        if (valor <= 0) {
            throw new Error("A propriedade valor deve ser maior que 0.");
        }

        if (valor > contas[indiceConta].saldo) {
            throw new Error("Saldo insuficiente para fazer a transferência.");
        }

        const transferenciaEmissor: Transacao = {
            data: Date.now(),
            valor: (-1) * valor,
            descricao: `Valor transfeirdo para ${contas[indiceContaDestinatario].nome}`
        }
        const transferenciaDestinatario: Transacao = {
            data: Date.now(),
            valor: valor,
            descricao: `Valor recebido de ${contas[indiceConta].nome}`
        }
        contas[indiceConta].extrato.push(transferenciaEmissor);
        contas[indiceContaDestinatario].extrato.push(transferenciaDestinatario);
        res.status(200).send("Transferência realizada com sucesso");

    } catch (error: any) {
        switch (error.message) {
            case "Algum valor não foi preenchido. Verifique os dados de cpf, nome, nomeDestinatario, cpfDestinatario ou valor.":
                res.status(400).send({ mensagem: error.message });
                break;
            case "Não existe um cliente cadastrado com esse CPF e nome. Verifique o cliente emissor.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "Não existe um cliente cadastrado com esse CPF e nome. Verifique o cliente destinatário.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "A propriedade valor deve ser do tipo number.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "A propriedade valor deve ser maior que 0.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "Saldo insuficiente para fazer a transferência.":
                res.status(422).send({ mensagem: error.message });
                break;
            default:
                res.status(500).send("Erro inesperado!");
                break;
        }
    }
})

app.put('/users/:cpf/saldo', (req, res) => {
    const cpf = req.params.cpf;
    const indiceConta = contas.findIndex(conta => conta.cpf === cpf);
    try {
        if (indiceConta < 0) {
            throw new Error("O cpf inserido não está cadastrado.");
        }

        let saldoAtualizado: number = 0;
        const dataAtual = Date.now();
        if (contas[indiceConta].extrato) {
            for (let transacao of contas[indiceConta].extrato) {
                if (transacao.data < dataAtual) {
                    saldoAtualizado += transacao.valor;
                }
            }
        }
        contas[indiceConta].saldo = saldoAtualizado;
        res.status(200).send("Saldo atualizado com sucesso.");

    } catch (error: any) {
        switch (error.message) {
            case "O cpf inserido não está cadastrado.":
                res.status(404).send({ mensagem: error.message });
                break;
            default:
                res.status(500).send("Erro inesperado!");
                break;
        }
    }
})

app.put('/users/:cpf/deposito', (req, res) => {
    const cpf = req.params.cpf;
    const { nome, valor } = req.body;

    try {
        if (!cpf || !nome || !valor) {
            throw new Error("Algum valor não foi preenchido. Verifique os dados de cpf, nome ou valor.");
        }

        if (isNaN(valor)) {
            throw new Error("A propriedade valor deve ser do tipo number.");
        }

        if (valor <= 0) {
            throw new Error("A propriedade valor deve ser maior que 0.")
        }

        const indiceConta = contas.findIndex(conta => conta.cpf === cpf && conta.nome.toLowerCase() === nome.toLowerCase());
        if (indiceConta < 0) {
            throw new Error("Não existe um cliente cadastrado com esse CPF e nome.");
        }

        const deposito: Transacao = {
            valor: valor,
            data: Date.now(),
            descricao: "Depósito de dinheiro"
        }
        contas[indiceConta].extrato.push(deposito);
        res.status(200).send("Depósito realizado com sucesso.");

    } catch (error: any) {
        switch (error.message) {
            case "Algum valor não foi preenchido. Verifique os dados de cpf, nome ou valor.":
                res.status(400).send({ mensagem: error.message });
                break;
            case "A propriedade valor deve ser do tipo number.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "A propriedade valor deve ser maior que 0.":
                res.status(422).send({ mensagem: error.message });
                break;
            case "Não existe um cliente cadastrado com esse CPF e nome":
                res.status(404).send({ mensagem: error.message });
                break;
            default:
                res.status(500).send("Erro inesperado!");
                break;
        }
    }

});

app.listen(3003, () => {
    console.log(cyan + "Server running at http://localhost:3003");
});