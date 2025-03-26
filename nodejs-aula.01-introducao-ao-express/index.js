// NODE.JS - Aula 01

// Importando o pacote do Express.js

const express = require("express"); 

// Carregando o método principal do Express

const app = express(); // Iniciando o Express
// Todo os métodos do Express estão contidos em app


// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método GET -> Cria uma rota na aplicação
// REQ -> Requisição
// RES -> Resposta

app.get("/", function(req, res){ // ( "nome da rota", função do que será requisitado ao usuário(requisição, resposta))
    res.send("<h1>Bem-vindo ao meu primeiro site em Node.js!</h1><br><p>Iniciando estudos com Node.Js</p>");
});

// CONFIGURANDO A VIEW ENGINE - EJS
app.set('view engine', 'ejs');


// ROTA DE PERFIL
// :nome -> parâmetro obrigatório
// :nome? -> parâmetro opcional

app.get("/perfil/:nome?", (req,res) => {

    //Coletando o parâmetro da rota e  gravando na variável
    const nome = req.params.nome;

    // res.send("<h1> Perfil do Usuário </h1>");

    if (nome) {
    res.send(`<h2> Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
    } else {
        res.send(`<h2> Faça login para acessar o seu perfil! </h2>`)
    }
});

// ROTA DE PRODUTOS

app.get("/produtos", (req, res) => {
    res.render("produtos");
});




// SERVIDOR - FINAL DO CÓDIGO
// Iniciando o Servidor da aplicação na porta 8080
// O método listen do Express inicia um Servidor
app.listen(8081, function(error){
    if(error){
        console.log("Ocorreu um erro ao iniciar o Servidor!" + error);
    } else {
        console.log("Servidor iniciado com sucesso.");
    }
}); 


