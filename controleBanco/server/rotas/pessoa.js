const express = require('express');
const conta = require('../controller/pessoa');

const rota = express.Router()

//Salvar dados pessoais no BD
rota.route('/').post(pessoa.criarPessoa)
