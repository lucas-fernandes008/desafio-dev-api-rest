const express = require('express');
const conta = require('../controller/transacao');

const rota = express.Router()

//Salvar dados das transacoes no BD
rota.route('/').post(transacao.criarTransacao)

//buscar transações de acordo com o ID
rota.route('/:id').get(transacao.getTransacoes)