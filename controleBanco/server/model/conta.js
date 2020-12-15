module.exports = {
    conta: function conta (queryInterface, Sequelize){
        return queryInterface.define(
            'contas',
            {
                idContas:{
                    type: Sequelize.INT,
                    primaryKey: true,
                    autoIncrement: true
                },
                saldo:{
                    type: Sequelize.DOUBLE
                },
                limiteSaqueDiario:{
                    type: Sequelize.DOUBLE
                },
                tipoConta:{
                    type: Sequelize.DECIMAL(10,0)
                },
                dataCriacao:{
                    type: Sequelize.DATE
                },
                pessoa:{
                    type: Sequelize.INT,
                    foreignKey: true
                },
                status:{
                    type: Sequelize.BOOLEAN
                }
            },
            {
                timestamps: false,
                freezeTableName: true
            }
        )
    }
}