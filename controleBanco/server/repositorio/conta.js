const config = require('../config/env');
const conta = require('../model/conta');
const Sequelize = require('sequelize');
let obj = config.dataConfig.MYSQL;

//conexão com o banco
const sequelize= new Sequelize(obj.database, obj.user, obj.password,{
    host: obj.host,
    port: obj.port,
    dialect: 'mysql',
    pool:{
        max: 5,
        min:0,
        idle: 10000
    }
});

//validação de conexão
sequelize.authenticate()
.then(()=>{
    console.log('Conexão bem sucedida')
}).catch(err =>{
    console.error('impossível realizar conexão:',err)
});

//buscar usuário com ID
async function getContaById(id){
    return await conta.conta(sequelize,Sequelise).findOne({
        where:{
            id: id
        }
    });
}

//buscar todas as contas
async function getAll(){
    return await conta.conta(sequelize,Sequelize).findAll();
}
//criar conta
async function criarConta(p){
    await conta.conta(sequelize, Sequelize).create(p);
}
//realizar saque no saldo da conta
async function realizarSaque(p){
    await conta.conta(sequelize.Sequelize).update(p,{where:{saldo: p.saldo}})
}
//realizar credito no saldo da conta
async function realizarCredito(p){
    await conta.conta(sequelize.Sequelize).update(p,{where:{saldo: p.saldo}})
}
//bloquear conta
async function bloquearConta(p){
    await conta.conta(sequelize.Sequelize).update(p,{where:{status: p.status}})
}

module.exports = {getAll,getContaById,criarConta,realizarCredito,realizarSaque,bloquearConta}