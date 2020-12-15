module.exports = {
    pessoa: function pessoa (queryInterface, Sequelize){
        return queryInterface.define(
            'pessoas',
            {
                idPessoa:{
                    type: Sequelize.INT,
                    primaryKey: true,
                    autoIncrement: true
                },
                nome:{
                    type: Sequelize.VARCHAR(30)
                },
                cpf:{
                    type: Sequelize.VARCHAR(11)
                },
                dataNascimento:{
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