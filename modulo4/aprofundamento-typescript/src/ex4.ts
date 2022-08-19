type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) escrevendo no console:
// tsc exercicio-4.ts

// c) Sim. Agora deve-se colocar no console o diretório do arquivo:
// tsc ./src/exercicio-4.ts

// d) Podemos rodar o comando tsc para transpilar vários arquivos 
// ao colocar seus nomes separados por um espaço. Ou ainda, o 
// comando tsc sem parâmetros, que converte todos os arquivos com
// a extensão .ts que encontrar.