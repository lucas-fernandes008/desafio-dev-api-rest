const conta = require('../services/conta');

//metodo que retorna todos as contas
async function getAll(req,res){
    return await conta.getAll()
    .catch(err=>{
        res.status(err.statusCode || 500).send(err);
    }).then(q =>{
        return res.status(200).send(q);
    })
}

//buscar conta pelo ID
async function getContaById(req,res){
    return await conta.getContaById(req.params.id)
    .catch(err =>{
        res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
        return res.status(200).send(q)
    })
}

//criar conta
async function criarConta(req,res){
    return await conta.criarConta(req.body.conta)
    .catch(err =>{
        res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
        return res.status(200).send('Conta Criada')
    })
}

//creditar em conta
async function realizarCredito(req,res){
    return await conta.realizarCredito(req.body.conta)
    .catch(err =>{
        res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
        return res.status(200).send('Saldo creditado com sucess')
    })
}

//debitar em conta
async function realizarSaque(req,res){
    return await conta.realizarSaque(req.body.conta)
    .catch(err =>{
        res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
        return res.status(200).send('Saldo debitado com sucess')
    })
}

//bloquear Conta
async function bloquearConta(req,res){
    return await conta.bloquearConta(req.body.conta)
    .catch(err =>{
        res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
        return res.status(200).send('Saldo debitado com sucess')
    })
}

module.exports = {getAll,getContaById,criarConta,realizarCredito,realizarSaque,bloquearConta}