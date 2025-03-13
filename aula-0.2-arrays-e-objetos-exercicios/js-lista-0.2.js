// EXERCICIO 01  - ARRAYS

let estadosBrasileiros = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

console.log("Exibindo a lista dos estados Brasileiros...");
estadosBrasileiros.forEach((estadosBrasileiros, i) => {
  console.log(`${i + 1} - ${estadosBrasileiros}`);
});

// EXERCICIO 02  - OBJETOS LITERAIS

const larissa = {

    nome: "Larissa",
    idade: "23",
    cidade: "Registro",
    hobby: "desenhar",
    musicaPreferida: "pinwheel - seventeen",

  };
  
  console.log(`Olá! Meu nome é ${larissa.nome}, tenho ${larissa.idade}, sou residente na cidade de ${larissa.registro} , tenho como hobby ${larissa.hobby} e minha musica preferida é ${larissa.musicaPreferida}. `);
  

// EXERCICIO 03  - ARRAY DE OBJETOS

const listarFilmes = [
  
    {
    titulo: "Barbie e o Castelo de Diamante",
    genero: "Animação, Aventura, Família",
    ano: 2008,
    classIdade: "Livre",
    },
    {
    titulo: "Barbie em A canção de Natal",
    genero: "Animação, Família",
    ano: 2008,
    classIdade: "Livre",
    },
    {
    titulo: "Barbie e as Três Mosqueteiras",
    genero: "Animação, Aventura, Família",
    ano: 2008,
    classIdade: "Livre",
    },
    {
    titulo: "Barbie em a Princesa e a Plebeia",
    genero: "Animação, Família",
    ano: 2004,
    classIdade: "Livre",
    },
    {
    titulo: "Barbie: A magia do arco-iris",
    genero: "Animação, Aventura, Família",
    ano: 2007,
    classIdade: "Livre",
    },
  
   
  ];
  
  listarFilmes.forEach(listarFilmes => {
    console.log(`Filme: ${listarFilmes.titulo}`)
    console.log(`Genero: ${listarFilmes.genero}`)
    console.log(`Ano: ${listarFilmes.ano}`)
    console.log(`Classificação: ${listarFilmes.classIdade}`)
    console.log();
  })