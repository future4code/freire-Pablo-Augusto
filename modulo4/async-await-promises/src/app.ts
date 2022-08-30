import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { AddressInfo } from 'net';
import { connection } from './connection';
import { BASE_URL } from './BASE_URL';

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// a) O método get
// b) Promise<any[]>
// c) Código abaixo:
// async function getAllSubs(): Promise<any[]> {
//     const response = await axios.get(`${BASE_URL}/subscribers`);
//     return response.data;
// }
// getAllSubs().then(console.log);

// Exercício 2
// a) Em vez de escrever: 'async function funcao(): tipoRetorno {}',
// escreve-se 'const funcao = async(): tipoRetorno => {}'
// b) Código abaixo:
// const getAllSubs = async(): Promise<any[]> => {
//     const response = await axios.get(`${BASE_URL}/subscribers`);
//     return response.data;
// }
// getAllSubs().then(console.log);

// Exercício 3
// a) Não
// b)
type User = {
    id: string,
    name: string,
    email: string
}
const getAllSubs = async(): Promise<User[]> => {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data.map((response: any) => {
        return {
            id: response.id,
            name: response.name,
            email: response.email
        }
    });
}
//getAllSubs().then(console.log);

// Exercício 4
// a) Promise<void> pois é uma promise que não retorna nada.
// b)
const createNews = async(
    title: string,
    content: string,
    date: number
): Promise<void> => {
    await axios.put(`${BASE_URL}/news`, {
        title: title,
        content: content,
        date: date
    });
}

// Exercício 5
// const sendNotifications = async (
//     users: User[]
// ): Promise<void> => {
  
//     try {
//         for (const user of users) {
//             await axios.post(`${BASE_URL}/notifications`, {
//                 subscriberId: user.id,
//                 message: "Test Notification"
//             });
//         }
  
//         console.log("All notifications sent");
//     } catch {
//         console.log("Error");
//     }
// };

// getAllSubs().then(sendNotifications)

// Exercício 6
// a) Faz com que várias promises aconteçam em paralelo
// b) A conclusão é obtida mais rapidamente
// c)
const sendNotifications = async (
    users: User[]
): Promise<void> => {
  
    try {
        const promises = users.map(user => {
            return axios.post(`${BASE_URL}/notifications`, {
                subscriberId: user.id,
                message: "Test Notification Promise.all"
            });
        });
        await Promise.all(promises);
        console.log("All notifications sent");
    } catch {
        console.log("Error");
    }
};
// getAllSubs().then(sendNotifications)

// Desafio
const sayHi = () => {
    console.log("Oi");    
}

const delayFunctionPromise = (delay: number, functionParam: any): Promise<any> => {
    return new Promise(() => {
        setTimeout(functionParam, delay)
    });
}

console.log("Começou");
delayFunctionPromise(5000, sayHi);


// Código para rodar o servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});