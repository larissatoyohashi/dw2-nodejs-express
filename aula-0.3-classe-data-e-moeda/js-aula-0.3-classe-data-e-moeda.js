// SEÇÃO 1
// CLASSES NO JAVASCRIPT
// Nome de classes devem iniciar com a primeira letra maiúscula

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  buzinar() {
    return "beep, beep!";
  }
}

// Criando uma instância (objeto da classe Carro)

carroPopular = new Carro("Fiat", "Uno", 2012);

console.log(carroPopular.marca);
console.log(carroPopular.modelo);
console.log(carroPopular.ano);

console.log(
  `O carro ${carroPopular.marca} é do ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

// Criando instância carroEsportivo

const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";

console.log(
  `O carro da marca ${carroEsportivo.marca}, do modelo ${
    carroEsportivo.modelo
  } é do ano ${carroEsportivo.ano} e faz ${carroEsportivo.buzinar()}`
);

// Adicionando um novo atributo

carroEsportivo.corNeon = "Azul";

// Adicionando um novo método

carroEsportivo.turbo = function () {
  return "Vrummm quando está acelerando!!!";
};

console.log(
  `O carro da marca ${carroEsportivo.marca}, do modelo ${
    carroEsportivo.modelo
  } e da cor ${carroEsportivo.corNeon} é do ano ${
    carroEsportivo.ano
  } e faz ${carroEsportivo.turbo()}`
);

// SEÇÃO 2
// MANIPULANDO DATAS NO JAVASCRIPT
// Classe Date() --> Classe nativa da linguagem Javascript

const dataAtual = new Date();
console.log(typeof dataAtual);

// Pegando o dia atual
const dia = dataAtual.getDate();
console.log(`Hoje é dia ${dia}.`);

// Pegando o mês atual
const mes = dataAtual.getMonth() + 1; // Adicionar o numero um para a contagem de meses começar pelo numero 1
console.log(`Estamos no mes ${mes}.`);

// Pegando o ano atual
const ano = dataAtual.getFullYear();
console.log(`Estamos no ano ${ano}`);

// ADICIONANDO DIAS, MESES E ANOS À DATA ATUAL

// Adicionar 10 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 1); // setDate faz uma manipulação da data

// Exibe a nova data:
console.log(`Daqui a 10 dias será dia ${dataAtual.getDate()}.`);

// Adicionar 3 meses à data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);

// Exibe o novo mês:
console.log(`Daqui a três meses será mês ${dataAtual.getMonth() + 1}.`);

// Adicionar 2 anos à data atual:
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

// Exibe o novo ano
console.log(`Daqui a dois anos será ${dataAtual.getFullYear()}`);

// SEÇÃO 3
// TRABALHANDO COM MOEDAS NO JAVASCRIPT
let salario = 2500.3;
console.log(salario);

// Mostrando as casas decimais
console.log(salario.toFixed(2));

// Ocultando as casas decimais
console.log(salario.toFixed(0));

// Alterando marcador de casa decimal
console.log(salario.toFixed(2).replace(".", ","));

// Formatação de moedas
// Mostrando o salário em REAL (R$)


// Mostrando o salário em DÓLAR (USD)
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "USD" })
);

// Mostrando o salário em EURO (EUR)
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "EUR" })
);

// CONVERTENDO DE REAL PARA DÓLAR
const salarioDolar = salario * 0.176;
console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })
);

// SEÇÃO 4
// FORMATAÇÃO DE STRING
const nome = "Larissa Toyohashi";

// Alterando para letras maúisculas
console.log(nome.toUpperCase());

// Alterando para letras maúisculas
console.log(nome.toLowerCase());

//Contando caracteres de uma string
console.log(nome.length);

// Removendo espaços
const novoNome = nome.replace(/\s/g,"")
console.log(novoNome.length);