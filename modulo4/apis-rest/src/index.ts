import express from 'express';
import cors from 'cors';
import { User, users, UserType } from './users';

const app = express();
app.use(express.json());
app.use(cors());
const cyan = '\u001b[36m';

// Exercício 1, Exercício 2 e Exercício 3
// 1.a) O método .get()
// 1.b) /users
app.get('/users', (req, res) => {
    try {
        switch (req.query.type) {
            case UserType.ADMIN:
                res.status(200).send(users.filter((user) => {
                    return user.type === UserType.ADMIN;
                }));
                break;
            case UserType.NORMAL:
                res.status(200).send(users.filter((user) => {
                    return user.type === UserType.NORMAL;
                }));
                break;
            default:
                if (!req.query.type) {
                    res.status(200).send(users);
                } else {
                    throw new Error("Tipo inexistente! Os valores de type devem ser 'ADMIN' ou 'NORMAL'.");
                }
        }

    } catch (error:any) {
        switch (error.message) {
            case "Tipo inexistente! Os valores de type devem ser 'ADMIN' ou 'NORMAL'.":
                res.status(422).send(error.message);
                break;
            default:
                res.status(500).send("Erro inesperado!")
        }
    }
});

//Exercício 4

app.post('/users', (req, res) => {
    const { name, email, type, age } = req.body;
    try {
        if(!name || !email || !type || !age) {
            throw new Error("Verificar se os dados do body foram inseridos: name, email, type e age");
        }
        if(typeof name !== "string") {
            throw new Error("A variável name deve ser do tipo string");
        }
        if(typeof email !== "string") {
            throw new Error("A variável email deve ser do tipo string");
        }
        if(!Object.values(UserType).includes(type)) {
            throw new Error("A variável type só aceita os valores 'ADMIN' ou 'NORMAL'");
        }
        if(age <= 0){
            throw new Error("O valor de age deve ser maior que zero");
        }
        const newUser: User = {
            id: Date.now(),
            name: name,
            email: email,
            type: type as UserType,
            age: age
        }
        users.push(newUser)
        res.status(200).send(users)
    } catch(error: any) {
        switch (error.message) {
            case "Verificar se os dados do body foram inseridos: name, email, type e age":
                res.status(422).send(error.message);
                break;
            case "A variável name deve ser do tipo string":
                res.status(422).send(error.message);
                break;
            case "A variável email deve ser do tipo string":
                res.status(422).send(error.message);
                break;
            case "A variável type só aceita os valores 'ADMIN' ou 'NORMAL'":
                res.status(422).send(error.message);
                break;
            case "O valor de age deve ser maior que zero":
                res.status(422).send(error.message);
                break;
            default:
                res.status(500).send("Erro inesperado!");
                break;
        }
    }
})

app.listen(3003, () => {
    console.log(cyan + "Server is running at http://localhost:3003");
});