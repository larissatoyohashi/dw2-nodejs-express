// Introdução a javascript
// CTRL + ; -> comenta o codigo selecionado
// SHIFT + ALT + F -> formata o código

// Declaração de variáveis no JS: CONST + LET + VAR

const nome = "Larissa"; // Const precisa de um valor atribuido a ele
let Nome; // Let não precisa de valor atribuido a ele

var cor = "Azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga";

const message = "Hello, world! Iniciando estudos Javascript!";
console.log(message);

// Typeof - Este comando exibirá o tipo de variável

const estado = "SP";
const idade = 18;
let endereco;

console.log(typeof estado); // imprime no console o tipo da variável 'estado'
console.log(typeof idade);
console.log(typeof endereco); // undefined = valor vazio, não tem valor atribuido a ele
// O Javascript é uma linguagem de tipagem dinamica e tipagem fraca

//////////////////////////////////////////////////////////////////////////////////////////////

// TIPOS DE FUNÇÕES NO JAVASCRIPT

function minhaFuncao() {}

console.log(typeof minhaFuncao); // tipagem function

// FUNÇÃO SIMPLES

function saudacao() {
  console.log("Olá, bem-vindo!");
}

saudacao(); // invocação da função

// FUNÇÃO COM PARAMETRO / ARGUMENTO
// Parâmetro é um dado que a função recebe
// Argumento é o dado que é enviado para a função

function Saudacao(nome) {
  // Parametro
  console.log("Olá, bem-vindo " + nome + "!"); // Concatenando uma variável

  console.log(`Olá, bem-vindo ${nome}`); // Usando template strings
  // $() -> Placeholder
}
Saudacao("Larissa"); // Argumento

// FUNÇÃO COM MAIS DE UM PARÂMETRO

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois números foi ${resultado}`);
}
let n1 = 6;
let n2 = 10;
soma(n1, n2);

// FUNÇÃO COM RETORNO

function Soma(n1, n2) {
  return n1 + n2; //retorna um valor ou uma string
}
console.log(`A soma dos dois números foi ${Soma(2, 8)}.`);

// FUNÇÃO COM MAIS DE UM RETORNO

function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

let num = 4;
console.log(parImpar(num));
console.log(`O numero ${num} é : ${parImpar(num)}`);

// FUNÇÃO ANÔNIMA
// Função anônima precisa ficar dentro de uma variável

let dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));
console.log(`O dobro do número é: ${dobro(15)}`);

// ARROW FUNCTION COM PARÂMETRO ÚNICO
// FUNÇÃO FLECHA
// Tipo de função anônima; forma reduzida

const Dobro = (x) => {
  //Para declarar dois parâmetros ou mais, manter os parênteses
  return x * 2;
};

console.log(Dobro(20));
console.log(`O dobro do número é: ${Dobro(20)}`);


// ARROW FUNCTION COM MAIS DE UM PARÂMETRO

const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`); // eval = função nativa do Javascript
};

console.log(`O resultado da operação é: ${calc(6, "*", 6)}`);


// SIMPLIFICANDO ARROW FUNCTION

const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`); 

  console.log(`O resultado da operação é: ${Calc(7, "*", 7)}`);


// IIFE - Immediately Invoked Function Expression
// Função Imediata

const life = (function() {
    console.log("Estoy")
})

//IIFE com parâmetro

const start = (function(app){
    console.log(`Executando imediatamente o app ${app}.`)
})
("Whatsapp")