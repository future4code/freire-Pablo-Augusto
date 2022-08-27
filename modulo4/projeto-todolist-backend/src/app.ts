import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { connection } from './connection';

const app = express();
app.use(express.json());
app.use(cors());

const cyan = '\u001b[36m';
const white = '\u001b[37m';

function formataDataDate(data: string): Date {
    const arrayDataString = data.split('/');
    const arrayDataNumber = [Number(arrayDataString[2]), Number(arrayDataString[1]) - 1, Number(arrayDataString[0])];
    const dataFormatada = new Date(arrayDataNumber[0], arrayDataNumber[1], arrayDataNumber[2]);
    return dataFormatada;
}

app.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await connection
            .from("ToDoListUser")
            .select("id", "nickname")
            .where("id", id);
        
        if (result.length === 0) {
            throw new Error("Usuário não encontrado!");
        }
        
        res.status(200).send(result[0]);

    } catch (error: any) {
        switch(error.message) {
            case "Usuário não encontrado!":
                res.status(404).send({ message: error.message });
                break;
            default:
                res.status(500).send(error.sqlMessage || error.message);
                break;
        }   
    }
})

app.get('/task/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await connection("ToDoListTask")
            .where("id", id);
        
        if (result.length === 0) {
            throw new Error("Tarefa não encontrada!");
        }
        
        res.status(200).send({...result[0], limit_date: result[0].limit_date.toLocaleDateString('pt-BR')});

    } catch (error: any) {
        switch(error.message) {
            case "Tarefa não encontrada!":
                res.status(404).send({ message: error.message });
                break;
            default:
                res.status(500).send(error.sqlMessage || error.message);
                break;
        }   
    }
})

app.post('/user', async (req, res) => {
    const { username, nickname, email } = req.body;

    try {
        if (!username || !nickname || !email) {
            throw new Error("Todos os campos devem ser preenchidos. Verifique os campos username, nickname e email.")
        }

        await connection("ToDoListUser")
            .insert({
                id: Date.now().toString(),
                username: username,
                nickname: nickname,
                email: email
            });
        res.status(201).send("Usuário criado com sucesso!");

    } catch (error: any) {
        switch (error.message) {
            case "Todos os campos devem ser preenchidos. Verifique os campos username, nickname e email.":
                res.status(422).send({ message: error.message });
                break;
            default:
                res.status(500).send(error.sqlMessage || error.message);
                break;
        }
    }
});

app.post('/task', async (req, res) => {
    const { title, description, limitDate, creatorUserId } = req.body

    try {
        if (!title || ! description || !limitDate || !creatorUserId) {
            throw new Error("Todos os campos devem ser preenchidos. Verifique os campos title, description, limitDate e creatorUserId.")
        }     

        await connection("ToDoListTask")
            .insert({
                id: `${Date.now().toString()}task`,
                title: title,
                description: description,
                limit_date: formataDataDate(limitDate),
                creator_user_id: creatorUserId
            });
        res.status(201).send("Tarefa criada com sucesso!");

    } catch (error: any) {
        switch (error.message) {
            case "Todos os campos devem ser preenchidos. Verifique os campos title, description, limitDate e creatorUserId.":
                res.status(422).send({ message: error.message });
                break;
            default:
                res.status(500).send(error.sqlMessage || error.message);
                break;
        }
    }
})

app.put('/user/edit/:id', async (req, res) => {
    const id = req.params.id;
    const { username, nickname } = req.body;

    try {
        if (!id || !username || !nickname) {
            throw new Error("Todos os campos devem ser preenchidos. Verifique os campos id, username e nickname.");
        }
        const findUser = await connection
            .from("ToDoListUser")
            .select("id")
            .where("id", id);
        
        if (findUser.length === 0) {
            throw new Error("Não existe usuário com o id inserido!");
        }
        await connection("ToDoListUser")
            .update({
                username: username,
                nickname: nickname
            })
            .where("id", id);
        
        res.status(200).send("Usuário editado com sucesso!");

    } catch (error: any) {
        switch (error.message) {
            case "Não existe usuário com o id inserido!":
                res.status(404).send({ message: error.message });
                break;
            case "Todos os campos devem ser preenchidos. Verifique os campos id, username e nickname.":
                res.status(422).send({ message: error.message });
                break;
            default:
                res.status(500).send(error.sqlMessage || error.message);
                break;
        }
    }
})

const server = app.listen(3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`${cyan}Server is running at http://localhost:${address.port}${white}`);
    } else {
        console.log("Failure upon starting server");
    }
});