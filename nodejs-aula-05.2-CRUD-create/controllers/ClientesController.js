import express from "express";

// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // Fazendo um SELECT na tabela de Clientes
  // findAll() -> retorna uma promise
 
  Cliente.findAll().then((clientes) => {
  res.render("clientes", {
    clientes: clientes,
  });
 }).catch((error) => {
    console.log(error);
 })
});

// ROTA DE CADASTRO DE CLIENTE
// get -> Recupera
// post -> Cadastra

router.post("/clientes/new", (req, res) => {
    const nome = req.body.nome; 
    const cpf = req.body.cpf;
    const end = req.body.endereco;
    
    Cliente.create({
      nome: nome,
      cpf: cpf,
      endereco: end,
    }).then(() => {
      console.log(`Realizado o cadastro: ${nome} - ${end} - ${cpf}`)
      res.redirect("/clientes");
    }).catch(error => {
      console.log(error);
    });

   
// ROTA DE EXCLUSÃO DE CLIENTE

router.get("/clientes/delete/:id", (req, res) => {
  // Coletando o parâmetro ID da rota
  const id = req.params.id;
  Cliente.destroy({
    where: {
      id : id
    }
  }).then(() => {
    console.log(`Cliente com a ID ${id} excluído com sucesso!`);
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
});

});


export default router;