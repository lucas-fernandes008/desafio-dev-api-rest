const config = require('../config/env');
const pessoa = require('../model/pessoa');
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

async function criarPessoa(p){
    await pessoa.pessoa(sequelize, Sequelize).create(p);
}

module.exports = {criarPessoa}