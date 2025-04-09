// Modo ES6 de importação
import express from "express";

// Modo CommonJS de importação
//const express = require("express");


// Carregando o método principal do Express
const app = express(); // Iniciando o Express

// Importando os Controllers (onde estão as rotas)
import ProdutosController from "./controllers/ProdutosController.js"


// CONFIGURANDO A VIEW ENGINE - EJS
app.set("view engine", "ejs");


// CONFIGURANDO A PLACA PUBLIC PARA ARQUIVOS ESTÁTICOS
// Define o uso da pasta "public para arquivos estáticos"
// Arquivos estáticos -> CSS, imagens e scripts
app.use(express.static('public'));

// Configurando o Express para utilizar as rotas dos Controllers
app.use("/", ProdutosController)


// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> trata a requisição
// RES -> trata a resposta
app.get("/", (req, res) => {
  res.render("index");
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
