//EXERCICIO 01 - CLASSES

class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }

  correr() {
    return "O heroi esta correndo!";
  }

  andar() {
    return "O heroi esta andando!";
  }

  atacar() {
    return "O heroi esta atacando!";
  }

  defender() {
    return "O heroi esta defendendo!";
  }
}

homemAranha = new Heroi();
homemAranha.nome = "Homem-Aranha";
homemAranha.vida = "100%";
homemAranha.velocidade = "120 km/h";
homemAranha.forca = "100/150";

homemAranha.teia = 1;

homemAranha.sentidoAranha = function () {
  return "O Homem-Aranha detectou perigo por perto.";
};

superMan = new Heroi();
superMan.nome = "SuperMan";
superMan.vida = "100%";
superMan.velocidade = "200 km/h";
superMan.forca = "150/150";

superMan.podeVoar = 1;

superMan.visaoCalor = function () {
  return "O Superman esta usando sua visão de calor.";
};

Batman = new Heroi();
Batman.nome = "Batman";
Batman.vida = "100%";
Batman.velocidade = "20 km/h";
Batman.forca = "50/150";

Batman.esconder = 1;

Batman.investigar = function () {
  return "O Batman esta investigando um crime.";
};

console.log("Listando Homem-Aranha...");
console.log(
  `O heroi ${homemAranha.nome}, tem ${homemAranha.vida} de vida, velocidade de ${homemAranha.velocidade} e forca ${homemAranha.forca}.`
);

console.log(homemAranha.teia);
console.log(homemAranha.sentidoAranha());
console.log(homemAranha.correr());
console.log(homemAranha.andar());
console.log(homemAranha.atacar());
console.log(homemAranha.defender());

console.log();
console.log("Listando Superman...");
console.log(
  `O heroi ${superMan.nome}, tem ${superMan.vida} de vida, velocidade de ${superMan.velocidade} e forca ${superMan.forca}.`
);

console.log(superMan.podeVoar);
console.log(superMan.visaoCalor());
console.log(superMan.correr());
console.log(superMan.andar());
console.log(superMan.atacar());
console.log(superMan.defender());

console.log();
console.log("Listando Batman...");
console.log(
  `O heroi ${Batman.nome}, tem ${Batman.vida} de vida, velocidade de ${Batman.velocidade} e forca ${Batman.forca}.`
);

console.log(Batman.esconder);
console.log(Batman.investigar());
console.log(Batman.correr());
console.log(Batman.andar());
console.log(Batman.atacar());
console.log(Batman.defender());

// EXERCICIO 02 - MANIPULAÇÃO DE DATAS

const dataAtual = new Date();

dataAtual.setDate(dataAtual.getDate() + 3);
dataAtual.setMonth(dataAtual.getMonth() + 2);
dataAtual.setYear(dataAtual.getFullYear() + 1);

const exibirData = () => {
  return `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`;
};

console.log(exibirData());

// EXERCICIO 03 - FORMATAÇÃO DE MOEDAS

const salDol = (salReal) => {
  return salReal * 0.176;
};

const salEur = (salReal) => {
  return salReal * 0.16;
};

console.log(
  `O salario em dolar eh ${salDol(2000).toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })} `
);

console.log(
  `O salario em euro eh ${salEur(2000).toLocaleString("en", {
    style: "currency",
    currency: "EUR",
  })} `
);

// EXERCICIO 04 - FORMATAÇÃO DE STRINGS

const 