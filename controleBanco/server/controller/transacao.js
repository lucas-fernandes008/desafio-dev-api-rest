const transacao = require('../services/transacao')

//buscar conta pelo ID
async function getTransacoes(req,res){
    return await transacao.getTransacoes(req.params.id)
    .catch(err =>{
        res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
        return res.status(200).send(q)
    })
}

//criar transação
async function criarTransacao(req,res){
    return await conta.criarTransacao(req.body.conta)
    .catch(err =>{
        res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
        return res.status(200).send('Transação Criada')
    })
}


module.exports ={getTransacoes,criarTransacao}