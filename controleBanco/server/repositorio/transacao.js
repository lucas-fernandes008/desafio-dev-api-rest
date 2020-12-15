const config = require('../config/env');
const transacao = require('../model/transacao');
const Sequelize = require('sequelize');
const sequelize = require('sequelize');
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

async function criarTransacao(p){
    await transacao.transacao(sequelize, Sequelize).create(p);
}

async function getTransacoes(id){
    return await transacao.transacao(sequelize,Sequelise).findOne({
        where:{
            id: id
        }
    });
}

module.exports = {criarTransacao,getTransacoes}