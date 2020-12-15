const pessoa = require('../repositorio/pessoa');

//Método para criar uma pessoa no banco
async function criarPessoa(p){
    var pessoa1 = await pessoa.criarPessoa(p)

    if (!pessoa1) {
        return {
          statusCode: 400,
          msg: 'Erro ao inserir ' + p.nome
        };
      }
    
      return pessoa1;
}


module.exports = {criarPessoa}