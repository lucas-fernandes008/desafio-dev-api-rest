//adicionando variaveis de ambiente da api

module.exports = {
    env: 'development',
    nomeAPI: 'testeDock',
    urlApi: 'http://localhost',
    portApi: 3303,
    dataConfig: {
        MYSQL: {
            database: 'dock',
            host: 'localhost',
            port: '3306',
            user: 'lucas',
            password: '123456'
        }
    }
};