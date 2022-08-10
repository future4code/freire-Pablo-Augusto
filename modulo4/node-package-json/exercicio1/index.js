// Exercício 1
// a) Acessamos através do process.argv a partir do terceiro índice (process.argv[2]).
// b) Código abaixo:

// const nome = process.argv[2];
// const idade = process.argv[3];

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// c) Código abaixo:

const nome = process.argv[2];
const idade = process.argv[3];
const novaIdade = Number(idade) + 7;

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em 7 anos você terá ${novaIdade}.`);