const transacao = require('../repositorio/transacao')

//Método para buscar transação pelo ID
async function getTransacoes(id){
    var transacao1 = await transacao.getTransacoes(id);

    if (!transacao1) {
        return {
          statusCode: 400,
          msg: 'Erro ao buscar a transacao'
        };
      }
    
      return transacao1;
}

//Método para criar uma transação
async function criarTransacao(p){
    var transacao1 = await transacao.criarTransacao(p);

    if (!transacao1) {
        return {
          statusCode: 400,
          msg: 'Não foi possível criar a transação'
        };
      }
    
      return transacao1;
}

module.exports = {getTransacoes,criarTransacao}