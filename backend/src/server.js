const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@node-api-eed5m.mongodb.net/semana-omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

/**
 * REQ -> Requisição
 * RES -> Resposta
 * 
 * GET -> Buscar 
 * POST -> Criar 
 * PUT -> Atualizar
 * DELETE -> Deletar
 * 
 * REQ.QUERY.{NAME} -> Acessar a query da URL
 * (/:id) - REQ.PARAMNS.ID -> Acessar a query pela URL passando só um ID
 * REQ.BODY -> Acessar corpo da requiisção (para criação, e edição) 
 */

//Ensinar o express a trabalhar com JSON
app.use(express.json());

//Usar as rotas
app.use(routes);

//Rodar na porta
app.listen(3333);