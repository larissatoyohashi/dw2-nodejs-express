//ARRAY (VETOR OU LISTA)

let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

// Exibe a lista pelos índices

console.log("Exibindo a lista pelos índices...");
console.log(Produtos[0]);
console.log(Produtos[1]);
console.log(Produtos[2]);
console.log(Produtos[3]);

// Concatenando

console.log("Exibindo a lista pelos índices...");
console.log(`1 - ${Produtos[0]}`);
console.log(`1 - ${Produtos[1]}`);
console.log(`1 - ${Produtos[2]}`);
console.log(`1 - ${Produtos[3]}`);

// Uso da estrutura de repetição FOR

console.log("Exibindo a lista através do FOR..");

// c - Represent os laços de repetição do for
for (let c in Produtos) {
  console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}

// Uso da estrutura de repetição FOREACH

console.log("Exibindo a lista através do forEach...");
Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo a lista através do forEach com os índices...");
Produtos.forEach((produto, i) => {
  console.log(`${i + 1} - ${produto}`);
});

// MANIPULAÇÃO DE VETORES

let vetor = ["Laranja", "Maca", "Banana"];
console.log(`Nosso vetor eh o: ${vetor}`);
vetor[3] = "Morango";
console.log(`Nosso vetor agora eh o ${vetor}`);

// Método PUSH - Insere um novo elemento no FINAL do vetor

vetor.push("Abacaxi");
console.log(`Nosso vetor agora eh o: ${vetor}`);

// Método UNSHIFT - Insere um novo elemento no INÍCIO do vetor

vetor[0] = "Pera";
console.log(`Nosso vetor agora eh o: ${vetor}`);
vetor.unshift("Laranja");
console.log(`Nosso vetor agora eh o ${vetor}`);

// Método LENGHT - Retorna o número de elementos no vetor

let numeros = [6, 8, 2, 9, 3, 800, 200];
console.log(`Nossa lista de numeros eh: ${numeros}`);
console.log(`O numero de elementos do vetor eh: ${numeros.length}`);

// Método SORT - Ordenar o vetor

console.log(`O primeiro elemento da lista de frutas eh: ${vetor[0]}`);

vetor.sort();
console.log(`Nossa lista de frutas ordenadas eh: ${vetor}`);

// Método SORT - Ordenação de números (COntabiliza apenas a primeira casa decimal)

console.log(`Nossa lista de numeros eh: ${numeros}`);

numeros.sort();
console.log(`Agora a nossa lista de numeros ordenadas eh: ${numeros}`);

// Método SORT - Ordenação de forma CRESCENTE (Contabiliza todas as casas decimais, comparando o primeiro número com o seguinte)

console.log(numeros.sort((a, b) => a - b));

// Método SORT - Ordenação de forma DESCRESCENTE (Contabiliza todas as casas decimais, comparando o primeiro número com o seguinte)

console.log(numeros.sort((a, b) => b - a));

//////////////

// OBJETOS LITERAIS (não são derivados de classes)
// Objetos possuem Atributos (características) e Métodos (ações)
// Lado esquerdo: chaves / Lado direito: valores

const pessoa = {}; // {} indica que está atribuindo um objeto
console.log(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",

  acelerar() {
    console.log("Acelerando...");
  },

  frear() {
    console.log("Freando...");
  },
};

console.log(`O modelo do carro eh: ${carro.modelo}`);
console.log(`A cor do carro eh: ${carro.cor}`);
carro.acelerar();
carro.frear();

//////////////

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho.",
};

console.log(produto);
console.log(`O ${produto.nome} da marca ${produto.marca} custa apenas ${produto.preco}. ${produto.descricao} `)

// Array de Objetos

const listarProdutos = [
  
  {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho.",
  },
  {
  nome: "Tablet",
  marca: "Samsung",
  preco: 2000,
  descricao: "Ótima velocidade de processamento",
  },

  {
  nome: "Celular",
  marca: "Apple",
  preco: 12000,
  descricao: "Ultra Resistente. Muito barato",
  },  
];

// Exibindo o Array de objetos com forEach

listarProdutos.forEach(produto => {
  console.log(`Produtos: ${produto.nome}`)
  console.log(`Marca: ${produto.marca}`)
  console.log(`Preco: ${produto.preco}`)
  console.log(`Descricao: ${produto.descricao}`)
  console.log();
})

//console.table

console.table(listarProdutos)