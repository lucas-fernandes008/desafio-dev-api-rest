module.exports = {
    transacao: function transacao (queryInterface, Sequelize){
        return queryInterface.define(
            'transacoes',
            {
                idTransacao:{
                    type: Sequelize.INT,
                    primaryKey: true,
                    autoIncrement: true
                },
                idConta:{
                    type: Sequelize.INT,
                    foreignKey:true
                },
                valor:{
                    type: Sequelize.DOUBLE
                },
                dataTransacao:{
                    type: Sequelize.DATE
                }
            },
            {
                timestamps: false,
                freezeTableName: true
            }
        )
    }
}