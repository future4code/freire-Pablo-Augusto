import express from 'express'
import cors from 'cors'
import { User, users } from './users'
import { posts } from './posts'

const app = express()
app.use(express.json())
app.use(cors())
const cyan = '\u001b[36m'

// Exercício 1
// app.get("/", (req, res) => {          
//     res.send("Olá, Mundo! Estou funcionando!")
// })

// Exercício 4
// app.get("/users", (req, res) => {          
//     res.status(200).send(users)
// })

// Exercício 7
// app.get("/posts", (req, res) => {          
//     res.status(200).send(posts)
// })

// Exercício 8
// app.get("/posts/:userId", (req, res) => {
//     const userPosts = posts.filter((post) => {
//         return post.userId === Number(req.params.userId)
//     })       
//     res.status(200).send(userPosts)
// })

// Exercício 9
// app.delete("/posts/:id", (req, res) => {
//     const updatedPosts = posts.filter((post) => {
//         return post.id !== Number(req.params.id)
//     })       
//     res.status(200).send(updatedPosts)
// })

// Exercício 10
app.delete("/users/:id", (req, res) => {
    const updatedUsers = users.filter((user) => {
        return user.id !== Number(req.params.id)
    })       
    res.status(200).send(updatedUsers)
})

app.listen(3003, () => {
    console.log(cyan+"Server is running in http://localhost:3003");
});