const express = require('express');
const conta = require('../controller/conta');

const rota = express.Router()

//buscar todas as contas
rota.route('/').get(conta.getAll)

//buscar conta pelo ID
rota.route('/:id').get(conta.getContaById)

//Criar uma conta
rota.route('/').post(conta.criarConta)

//realizar saque
rota.route('/:id').put(conta.realizarSaque)

//realizar crédito
rota.route('/:id').put(conta.realizarCredito)

//bloquear ou desbloquear conta
rota.route('/:id').put(conta.bloquearConta)