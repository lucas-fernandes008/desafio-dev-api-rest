const pessoa = require('../services/pessoa');

//metodo de criação de pesso
async function criarPessoa(req,res){
    return await pessoa.criarPessoa(req.body.conta)
    .catch(err =>{
        res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
        return res.status(200).send('Pessoa salva no BD')
    })
}

module.exports = {criarPessoa}