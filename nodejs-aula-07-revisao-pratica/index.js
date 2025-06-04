// Importações
import express from "express";
import MoviesController from "./controllers/MoviesController.js";
import connection from "./config/sequelize-config.js";

const app = express();

// Iniciando a template engine EJS
app.set("view engine", "ejs");

app.use(express.urlencoded({extended : false})); // Acima da rota

app.use("/", MoviesController);


connection.authenticate().then(() => {
    console.log(`Conexão com o banco de dados realizada com sucesso!`);
}).catch((error =>{
    console.log(error);
}))

connection.query("CREATE DATABASE IF NOT EXISTS movies;").then(() =>{
    console.log("Banco de dados criado com sucesso");
}).catch(error => {
    console.log(error);
})

 const port  = 8080;
 app.listen(port, (error) => {
    if (error){
        console.log(`Ocorreu um erro ${error}`);
    } else {
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
 });