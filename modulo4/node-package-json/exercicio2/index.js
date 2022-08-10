// Exercício 2

const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch (operacao) {
    case 'add':
        console.log('Resposta :', num1 + num2);
        break;
    case 'sub':
        console.log('Resposta :', num1 - num2);
        break;
    case 'mult':
        console.log('Resposta :', num1 * num2);
        break;
    case 'div':
        console.log('Resposta :', num1 / num2);
        break;
    default: 
        console.log('Algum valor foi inserido incorretamente!');
        console.log('Utilize "add", "sub", "mult" e "div" para operações.');
        console.log('Exemplo: sub 4 1')
        break;
}