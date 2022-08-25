import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { connection } from './connection';

const app = express();
app.use(express.json());
app.use(cors());
const cyan = '\u001b[36m';

// Exercício 1
// a) A resposta devolve uma lista que contém 2 listas,
// a primeira contém os dados da tabela Actor e a segunda
// contém outros dados relacionados à tabela.
// Para pegarmos apenas a primeira lista tabela pode-se utilizar o [0].
// O código abaixo faz essa requisição:
// app.get('/actors', async (req, res) => {
//     try {
//         const result = await connection.raw(`
//             SELECT * FROM Actor;
//         `);
//         res.status(200).send(result[0]);
//     } catch (error: any) {
//         res.status(500).send(error.sqlMessage || error.message);
//     }
// });

// b) 
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `);

    return result[0][0];
}

// getActorByName("Rodrigo Santoro")
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// c)
// const countActorsByGender = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//         SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}';
//     `);

//     return result[0][0].count;
// 
//}
// countActorsByGender('male')
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// countActorsByGender('female')
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });


// Exercício 2
// a)
const editActor = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({ salary: salary })
        .where({ id: id });
}
// editActor('001', 1700000)
//     .then(() => console.log("Editado com sucesso!"))
//     .catch(error => console.log(error));


// b)
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where({ id: id });
}
// deleteActor('001')
//     .then(() => console.log("Apagado com sucesso!"))
//     .catch(error => console.log(error));

// c)
const averageSalaryByGender = async (gender: string): Promise<number> => {
    const result = await connection("Actor")
        .avg("salary as averageSalary")
        .where("gender", gender);
    return result[0].averageSalary;
}

// const ex2Gender: string = 'male';
// averageSalaryByGender(ex2Gender)
//     .then(result => console.log(`The average ${ex2Gender} salary is R$${result.toFixed(2)}`))
//     .catch(error => console.log(error));


// Exercício 3
// a)

const getActorById = async (id: string): Promise<any> => {
    const result = await connection("Actor")
        .where({ id: id })

    return result[0];
}

app.get('/actor/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getActorById(id);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
});

// b)
const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .count('* as count')
        .where({ gender: gender });
    return result[0].count;
}
app.get('/actors', async (req, res) => {
    try {
        const gender = req.query.gender as string;
        const result = await countActorsByGender(gender);
        res.status(200).send({
            quantity: result
        });
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
});


// Exercício 4

// const createActor = async (
//         name: string,
//         salary: number,
//         dateOfBirth: Date,
//         gender: string
//     ) => {
//     await connection.insert({
//         id: Date.now().toString(),
//         name: name,
//         salary: salary,
//         birth_date: dateOfBirth,
//         gender: gender
//     }).into("Actor");
// }

// app.post("/actor", async (req, res) => {
//     try {
//       await createActor(
//         req.body.name,
//         req.body.salary,
//         new Date(req.body.dateOfBirth),
//         req.body.gender
//       );

//       res.status(201).send("Criado com sucesso!");
//     } catch (error: any) {
//       res.status(400).send({
//         message: error.message,
//       });
//     }
// });

// a)
const updateSalary = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({ salary: salary })
        .where({ id: id });
}

app.put("/actor", async (req, res) => {
    try {
        await updateSalary(req.body.id, req.body.salary);
        res.status(200).send("Alterado com sucesso!");
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});

// b) Função para deletar já foi declarada acima
app.delete("/actor/:id", async (req, res) => {
    try {
        await deleteActor(req.params.id);
        res.status(200).send("Apagado com sucesso!");
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});


const server = app.listen(3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`${cyan}Server is running at http://localhost:${address.port}`);
    } else {
        console.log("Failure upon starting server");
    }
})