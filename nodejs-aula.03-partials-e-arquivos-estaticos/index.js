// Importando o pacote do Express.js
const express = require("express");
// Carregando o método principal do Express
const app = express(); // Iniciando o Express

// CONFIGURANDO A VIEW ENGINE - EJS
app.set("view engine", "ejs");


// CONFIGURANDO A PLACA PUBLIC PARA ARQUIVOS ESTÁTICOS
// Define o uso da pasta "public para arquivos estáticos"
// Arquivos estáticos -> CSS, imagens e scripts
app.use(express.static('public'));

// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> trata a requisição
// RES -> trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});

//ROTA PERFIL
app.get("/perfil", (req, res) => {
  res.render("perfil");
});

//ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  // Coletando o parâmetrop da rota
  const produto = req.params.produto

// ARRAY COM LISTA DE PRODUTOS

  const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook'];


  res.render("produtos", {
    // Enviando a variável produto para a página
    produto : produto,
    produtos : produtos
  });
});



// Iniciando o servidor da aplicação na porta 8080
// O Método listen do Express inicia um servidor
app.listen(8081, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor Iniciado com sucesso!");
  }
});
