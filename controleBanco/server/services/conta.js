const conta = require('../repositorio/conta');

//Método para buscar todas as contas
async function getAll(){
    var contas = await conta.getAll();

    // Caso de algum problema vamos retornar o status code 400 com a mensagem Erro ao buscar as contas
  if (!contas) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar as contas'
    };
  }

  //Aqui retornamos as contas encontrados no banco
  return contas;
}

//Método para buscar pelo ID
async function getContaById(id){
    var conta1 = await conta.getContaById();

    if (!conta1) {
        return {
          statusCode: 400,
          msg: 'Erro ao buscar a conta'
        };
      }
    
      //Aqui retornamos a conta referente ao ID
      return conta1;
}

//Método para criar uma conta
async function criarConta(p){
    var conta1 = await conta.criarConta(p);

    if (!conta1) {
        return {
          statusCode: 400,
          msg: 'Erro ao inserir a conta' + p.id
        };
      }
    
      return conta1;
}

//Método para bloquear ou desbloquear conta
async function bloquearConta(id){
    var conta1 = await conta.bloquearConta(id);

    if (!conta1) {
        return {
          statusCode: 400,
          msg: 'Erro ao buscar a conta'
        };
      }
    
      return conta1;
}

async function realizarSaque(id){
    var conta1 = await conta.realizarSaque(id);

    if (!conta1) {
        return {
          statusCode: 400,
          msg: 'Conta não encontrada para realização de saque'
        };
      }
    
      return conta1;
}

async function realizarCredito(id){
    var conta1 = await conta.realizarCredito(id);

    if (!conta1) {
        return {
          statusCode: 400,
          msg: 'Conta não encontrada para creditar'
        };
      }

    return conta1;
    
}


module.exports ={getAll,getContaById,criarConta,bloquearConta,realizarCredito,realizarSaque}