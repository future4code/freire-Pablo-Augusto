import express from 'express';
import cors from 'cors';
import { User, users } from './users';

const app = express();
app.use(express.json());
app.use(cors());
const cyan = '\u001b[36m';

// Exercício 1
// a) O método .get()
// b) /users
app.get('/users', (req, res) => {
    res.status(200).send(users);
})


app.listen(3003, () => {
    console.log(cyan+"Server is running at http://localhost:3003");
})