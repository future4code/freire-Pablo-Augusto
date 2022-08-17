import express from "express";
import cors from 'cors';
import { Task, todoList } from "./todoList";

const app = express()
app.use(express.json())
app.use(cors())
const cyan = '\u001b[36m'

// Exercício 1
app.get('/ping', (req, res) => {
    res.send("pong")
})

// Exercício 4
app.get('/todoList/:status', (req, res) => {
    let status: boolean
    switch (req.params.status) {
        case 'done':
            status = true
            break
        case 'todo':
            status = false
            break
        default:
            res.status(404).send('Página não encontrada!')
            break
    }
    const filteredList: Array<Task> = todoList.filter((task) => {
        return (task.completed === status)
    })
    res.status(200).send(filteredList)
})

// Exercício 5
app.post('/createTask', (req, res) => {  
    const newTask = {     
        userId: req.body.userId,
        id: req.body.id,
        title: req.body.title,
        completed: req.body.completed
    } 
    const tasks = todoList
    tasks.push(newTask)
    res.send(tasks)
})

// Exercício 6
app.put('/editTask/:id', (req, res) => {
    const idTask = Number(req.params.id)
    const editedTask = todoList.filter((task) => {
        return task.id === idTask
    })
    editedTask[0] = {
        ...editedTask[0],
        completed: !editedTask[0].completed
    }
    const updatedList = todoList.map((task) => {
        if (task.id === idTask) {
            return editedTask[0]
        } else {
            return task
        }
    })
    res.send(updatedList)
})

// Exercício 7
app.delete('/deleteTask/:id', (req, res) => {
    const idTask = Number(req.params.id)
    const updatedList = todoList.filter((task) => {
        return task.id !== idTask
    })
    res.send(updatedList)
})

// Exercício 8
app.get('/userTasks/:userId', (req, res) => {
    const userId = Number(req.params.userId)
    const userTasks = todoList.filter((task) => {
        return task.userId === userId
    })
    res.send(userTasks)
})

app.listen(3003, () => {
    console.log(cyan+"Server is running in http://localhost:3003")
})

// Exercício 9
// https://documenter.getpostman.com/view/21557802/VUqmuJUL