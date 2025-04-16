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

export default router;