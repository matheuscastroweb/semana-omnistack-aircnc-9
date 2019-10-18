const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

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

const connectedUsers = {};

io.on('connection', socket => {
  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
})

//Protege o backend para que não possa ser acessado, deixa todos acessarem
//Colocar apenas para essa URL acesse

app.use(cors());
//OU -  app.use(cors({ origin: 'http://localhost:3333'}));

//Ensinar o express a trabalhar com JSON
app.use(express.json());

//Utilizado para rota estática
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

//Usar as rotas
app.use(routes);

//Rodar na porta
server.listen(3333);
