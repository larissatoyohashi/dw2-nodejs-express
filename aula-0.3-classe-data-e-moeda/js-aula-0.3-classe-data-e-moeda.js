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

console.log(carroPopular.marca)
console.log(carroPopular.modelo)
console.log(carroPopular.ano)

console.log(`O carro ${carroPopular.marca} é do ano ${carroPopular.ano} e faz ${carroPopular.buzinar()}`)

// Criando instância carroEsportivo

const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = "2024"

console.log(`O carro da marca ${carroEsportivo.marca}, do modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e faz ${carroEsportivo.buzinar()}`)

// Adicionando um novo atributo

carroEsportivo.corNeon = "Azul"

// Adicionando um novo método

carroEsportivo.turbo = function() {
    return "Vrummm quando está acelerando!!!"
}

console.log(`O carro da marca ${carroEsportivo.marca}, do modelo ${carroEsportivo.modelo} e da cor ${carroEsportivo.corNeon} é do ano ${carroEsportivo.ano} e faz ${carroEsportivo.turbo()}`)
