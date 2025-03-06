//ARRAY (Vetor ou Lista)

let produtos = []
console.log(typeof(produtos))

let Produtos = ["Computador", "Notebook", "Celular","Tablet"]
console.log(Produtos)

// Exibe a lista pelos índices

console.log("Exibindo a lista pelos índices...")
console.log(Produtos[0])
console.log(Produtos[1])
console.log(Produtos[2])
console.log(Produtos[3])

// Concatenando

console.log("Exibindo a lista pelos índices...")
console.log(`1 - ${Produtos[0]}`)
console.log(`1 - ${Produtos[1]}`)
console.log(`1 - ${Produtos[2]}`)
console.log(`1 - ${Produtos[3]}`)

// Uso da estrutura de repetição FOR

console.log("Exibindo a lista através do FOR..")

// c - Represent os laços de repetição do for
for(let c in Produtos){
    console.log(`${Number(c) + 1} - ${Produtos[c]}`)
}

// Uso da estrutura de repetição FOREACH

console.log("Exibindo a lista através do forEach...")
Produtos.forEach(function(produto){
    console.log(produto)
})

console.log("Exibindo a lista através do forEach com os índices...")
Produtos.forEach ((produto, i) => {
    console.log(`${i + 1} - ${produto}`)
})
