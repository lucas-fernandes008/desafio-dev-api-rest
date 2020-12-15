const express = require('express');
const { rootCertificates } = require('tls');
const rota = express.Router()
const conta = require('./conta')
const pessoa = require('./pessoa')
const transacao= require('./transacao')

//validando comunicação com a api
router.get('/api-status', (req, res) =>
  res.json({
    status: "ok"
  })
);

//mapeando rotas das entidades
rota.get('/conta',conta);
rota.get('/pessoa',pessoa);
rota.get('/transacao',transacao);

module.exports = rota;
