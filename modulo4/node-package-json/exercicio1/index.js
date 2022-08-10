// Exercício 1
// a) Acessamos através do process.argv a partir do terceiro índice (process.argv[2]).
// b) Código abaixo:

// const nome = process.argv[2];
// const idade = process.argv[3];

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// c) Código abaixo:
// Desafios 1 e 2 implementados

const cores = require("../Cores")

// const vermelho = '\u001b[31m';
// const verde = '\u001b[32m';
// const branco = '\u001b[37m';

const nome = process.argv[2];
const idade = process.argv[3];
const novaIdade = Number(idade) + 7;

nome && idade
? console.log(`Olá, ${cores.verde}${nome}${cores.branco}! Você tem ${cores.verde}${idade}${cores.branco} anos. Em 7 anos você terá ${cores.verde}${novaIdade}${cores.branco}.`)
: console.log(cores.vermelho + "Para funcionar este programa requer 2 parâmetros: nome e idade.");