// NODE.JS - Aula 01

// Importando o pacote do Express.js

const express = require("express"); 

// Carregando o método principal do Express

const app = express(); // Iniciando o Express
                       // Todo os métodos do Express estão contidos em app


// Iniciando o Servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor
app.listen(8080, function(error){
    if(error){
        console.log("Ocorreu um erro ao iniciar o Servidor!" + error);
    } else {
        console.log("Parabéns, você iniciou o seu primeiro Servidor Express com Node.js");
    }
}); 

