const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT || 3000;

const uri = 'mongodb://localhost:3000';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const funcionariosRouter = require('../routes/funcionarios');

let db;

client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    return;
  }
  console.log('Conectado ao MongoDB');
  db = client.db('MeuBancoDeDados');

  // Inicialize e configure as rotas aqui (veremos um exemplo abaixo)
});
app.use('/funcionarios', funcionariosRouter);


// Configuração de middlewares e rotas aqui

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
