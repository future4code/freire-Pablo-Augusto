import express from "express";
import cors from 'cors';
import { Product, products } from "./data";

const app = express()
app.use(express.json())
app.use(cors())
const cyan = '\u001b[36m'

// Exercício 1
app.get('/test', (req, res) => {
    res.send('Tá rodando normal, Rogerinho!')
})

// Exercício 3 e Exercício 7
app.post('/products', (req, res) => {
    const { name, price } = req.body
    try {
        if(!name || !price) {
            throw new Error("Verificar se os dados do body foram inseridos: name e price")
        }
        if(typeof name !== "string") {
            throw new Error("A variável name deve ser do tipo string")
        }
        if(typeof price !== "number") {
            throw new Error("A variável price deve ser do tipo number")
        }
        if(price <= 0){
            throw new Error("O valor de price deve ser maior que zero")
        }
        const fullBody = {
            id: Date.now().toString(),
            name: req.body.name,
            price: req.body.price
        }
        products.push(fullBody)
        res.send(products)
    } catch(error: any) {
        switch (error.message) {
            case "Verificar se os dados do body foram inseridos: name e price":
                res.status(422).send(error.message)
                break
            case "A variável name deve ser do tipo string":
                res.status(422).send(error.message)
                break
            case "A variável price deve ser do tipo number":
                res.status(422).send(error.message)
                break
            case "O valor de price deve ser maior que zero":
                res.status(422).send(error.message)
                break
            default:
                res.status(500).send("Erro inesperado!")
                break
          }
    }

})

// Exercício 4
app.get('/products', (req, res) => {
    res.send(products)
})

// Exercício 5 e Ecercício 8
app.put('/products/:id', (req, res) => {
    const productID = req.params.id
    const price = req.body.price
    try {
        if(!price) {
            throw new Error("Verificar se os dados do body foram inseridos: price")
        }
        if(typeof price !== "number") {
            throw new Error("A variável price deve ser do tipo number")
        }
        if(price <= 0){
            throw new Error("O valor de price deve ser maior que zero")
        }
        const updatedList = products.map((product) => {
            if(product.id !== productID) {
                return product
            } else {
                return {
                    ...product,
                    price: price
                }
            }
        })
        res.send(updatedList)
    } catch(error: any) {
        switch (error.message) {
            case "Verificar se os dados do body foram inseridos: price":
                res.status(422).send(error.message)
                break
            case "A variável price deve ser do tipo number":
                res.status(422).send(error.message)
                break
            case "O valor de price deve ser maior que zero":
                res.status(422).send(error.message)
                break
            default:
                res.status(500).send("Erro inesperado!")
                break
          }
    }
})

// Exercício 6 e Exercício 9
app.delete('/products/:id', (req, res) => {
    const productID = req.params.id
    try {
        const idList = products.map((product) => {
            return product.id
        })
        if (idList.indexOf(productID) < 0) {
            throw new Error("O id do produto inserido não existe")
        }
        const updatedList = products.filter((product) => {
            return product.id !== productID
        })
        res.send(updatedList)
    } catch(error: any) {
        switch(error.message) {
            case "O id do produto inserido não existe":
                res.status(404).send(error.message)
                break
            default:
                res.status(500).send("Erro inesperado!")
                break
        }
    }
})

app.listen(3003, () => {
    console.log(cyan+"Server running at http://localhost:3003")
})