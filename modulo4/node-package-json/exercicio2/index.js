// Exercício 2
// Desafios 1 e 2 implementados

const cores = require("../Cores")

const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (operacao && num1 && num2) {
    switch (operacao) {
        case 'add':
            console.log(cores.azul + 'Resposta :', num1 + num2);
            break;
        case 'sub':
            console.log(cores.azul + 'Resposta :', num1 - num2);
            break;
        case 'mult':
            console.log(cores.azul + 'Resposta :', num1 * num2);
            break;
        case 'div':
            console.log(cores.azul + 'Resposta :', num1 / num2);
            break;
        default: 
            console.log(cores.vermelho + 'A operação foi inserida incorretamente!');
            console.log(cores.branco+'Utilize '+cores.amarelo+'"add"'+cores.branco+', '+cores.amarelo+'"sub"'+cores.branco+', '+cores.amarelo+'"mult"'+cores.branco+' e '+cores.amarelo+'"div"'+cores.branco+' para operações.');
            console.log('Exemplo: '+cores.ciano+'sub 4 1')
            break;
    }
} else {
    console.log(cores.vermelho +'Um ou mais parâmetros ficaram faltando! Insira no formato: '+cores.ciano+'operacao numero1 numero2');
}
