// Exercício 3

import { tarefas } from "./tarefas.js";

tarefas.push(process.argv[2]);

console.log("Tarefa adicionada com sucesso!\n\ntarefas: [")
for (let i = 0; i < tarefas.length; i++) {
    console.log(i === tarefas.length -1 ? `  "${tarefas[i]}"\n]` : `  "${tarefas[i]}",`);
}