/* Exercício 1 interpretação 

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
    console.log(item, index, array)
})

// Vão ser impressos os itens do array usuarios (um por linha), seus respectivos índices (um por linha) e o próprio array (3 vezes, 1 vez por linha).

*/

/* Exercício 2 interpretação 

const usuarios = [
{ nome: "Amanda Rangel", apelido: "Mandi" },
{ nome: "Laís Petra", apelido: "Laura" },
{ nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
})

console.log(novoArrayB)

// Vai ser impresso o array novoArrayB que contém apenas os nomes dos objetos contidos no array usuarios.

*/

/* Exercício 3 interpretação 

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
})

console.log(novoArrayC)

// Vai ser impresso o array novoArrayC que contém todos os objetos cujo atributo apelido é diferente de "Chijo"

*/

/* Exercício 1 escrita 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// item a
const nomePets = pets.map((pet) => {
    return pet.nome
})
console.log(nomePets)

// item b
const cachorrosSalsicha = pets.filter((pet) => {
    return pet.raca === "Salsicha"
})
console.log(cachorrosSalsicha)

// item c
const cachorrosPoodle = pets.filter((pet) => {
    return pet.raca === "Poodle"
})
const mensagemDesconto = cachorrosPoodle.map((pet) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})
console.log(mensagemDesconto)

*/

/* Exercício 2 escrita 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// item a
const nomeProdutos = produtos.map((produto) => {
    return produto.nome
})
console.log(nomeProdutos)

// item b
const produtosComDesconto = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: Number((produto.preco * 0.95).toFixed(2))
    }
})
console.log(produtosComDesconto)

// item c
const bebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})
console.log(bebidas)

// item d
const produtosYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})
console.log(produtosYpe)

// item e
const anunciaProdutoYpe = produtosYpe.map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco.toFixed(2)}`
})
console.log(anunciaProdutoYpe)

*/

/* Desafio 1 

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// item a
const pokemonsOrdemAlfabetica = pokemons.map((pokemon) => {
    return pokemon.nome
}).sort()
console.log(pokemonsOrdemAlfabetica)

// item b
const listaTipos = pokemons.map((pokemon) => {
    return pokemon.tipo
})
const tiposPokemon = listaTipos.filter((tipo, indice) => {
    return listaTipos.indexOf(tipo) === indice
})
console.log(tiposPokemon)

*/