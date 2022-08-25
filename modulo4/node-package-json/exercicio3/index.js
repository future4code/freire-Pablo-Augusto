// Exercício 3
// Desafio 3 implementado

const cores = require("../Cores")
const fs = require('fs');
const novaTarefa = process.argv[2];
let listaTarefas = []

if (novaTarefa) {
    try {
        fs.appendFileSync('tarefas.txt', `${novaTarefa}\n`)
        const data = fs.readFileSync('tarefas.txt', 'utf8');
        listaTarefas = data.split('\n')
        listaTarefas.pop()
    } catch (err) {
        console.error(err);
    }
    console.log(cores.ciano+"Tarefa adicionada com sucesso!\n\n"+cores.branco+"tarefas:", listaTarefas);
} else {
    try {
        const data = fs.readFileSync('tarefas.txt', 'utf8');
        listaTarefas = data.split('\n')
        listaTarefas.pop()
    } catch (err) {
        console.error(err);
    }
    console.log(cores.vermelho+"Nenhuma tarefa adicionada!\n\n"+cores.branco+"tarefas:", listaTarefas);
}