/* 
    MICRO DESAFIO
    1. Crie um array que contenha nomes de produtos de mercado para compra;
    2. Após cria-lo exiba no console o resultado dos métodos relacionados aos arrays.
    que são: push, pop, shift, unshift, join, indexOf, lastIndexOf e includes.
    3. Escreva com as suas palavras o que cada método faz.*/

    let produtosMercado = ['Frutas', 'Carnes', 'Leite']

    // push() adiciona um ou mais elementos no final do array
    produtosMercado.push("Salada")
    produtosMercado.push("Pão", "Detergente", "Papel Higiênico")
    // pop() elimina o ultimo elemento do array
    let ultimoElemento = produtosMercado.pop()
    // shift() elimina o primeiro elemento do array
    let primeiroElemento = produtosMercado.shift()
    // unshift() adiciona um ou mais elementos no início do array
    produtosMercado.unshift("Sabão em pó", "Feijão")
    //join() transforma todos os elementos em uma única string
    let texto = produtosMercado.join(" | ")
    
    
    
    console.log(produtosMercado[0])
    console.log(produtosMercado[1])
    console.log(produtosMercado[2])
    
    console.log(produtosMercado)
    console.log(`Meu último elemento era ${ultimoElemento}`)
    console.log(`Meu primeiro elemento era ${primeiroElemento}`)
    console.log(`Estou transformando tudo em uma string: ${texto}`)
    console.log(filmesFavoritos.length)
    console.log(filmesFavoritos)
    //indexOf() retorna a posição do elemento procurado
    console.log(filmesFavoritos.indexOf("Leite"))
    //lastIndexOf() pesquisa a posiçao do elemento do fim da lista pro começo.
    console.log(filmesFavoritos.lastIndexOf("Pão"))
    //includes() similar ao indexOf() mas retorna um valor booleano (verdadeiro ou falso).
    console.log(filmesFavoritos.includes("Arroz"))
    console.log(filmesFavoritos.includes("Sabonete"))