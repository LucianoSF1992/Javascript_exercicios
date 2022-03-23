let filmesFavoritos = ['Star Wars', 'Kill Bill', 'Alien']

// push() adiciona um ou mais elementos no final do array
filmesFavoritos.push("Hell Boy")
filmesFavoritos.push("007", "Eurotrip", "Interestelar")
// pop() elimina o ultimo elemento do array
let ultimoElemento = filmesFavoritos.pop()
// shift() elimina o primeiro elemento do array
let primeiroElemento = filmesFavoritos.shift()
// unshift() adiciona um ou mais elementos no início do array
filmesFavoritos.unshift("O poderoso chefão", "Meu malvado favorito")
//join() transforma todos os elementos em uma única string
let texto = filmesFavoritos.join(" | ")



console.log(filmesFavoritos[0])
console.log(filmesFavoritos[1])
console.log(filmesFavoritos[2])

console.log(filmesFavoritos)
console.log(`Meu último elemento era ${ultimoElemento}`)
console.log(`Meu primeiro elemento era ${primeiroElemento}`)
console.log(`Estou transformando tudo em uma string: ${texto}`)
console.log(filmesFavoritos.length)
console.log(filmesFavoritos)
//indexOf() retorna a posição do elemento procurado
console.log(filmesFavoritos.indexOf("Alien"))
//lastIndexOf() pesquisa a posiçao do elemento do fim da lista pro começo.
console.log(filmesFavoritos.lastIndexOf("007"))
//includes() similar ao indexOf() mas retorna um valor booleano (verdadeiro ou falso).
console.log(filmesFavoritos.includes("Eurotrip"))
console.log(filmesFavoritos.includes("Minha mão é uma peça"))