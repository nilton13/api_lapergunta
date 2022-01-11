const { Model, DataTypes } = require('sequelize');


class Pontuation extends Model {
    static init(sequelize){
        super.init({
            questions_answ: DataTypes.NUMBER,
            questions_corre: DataTypes.NUMBER,
            pontuation_total: DataTypes.NUMBER,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User,{ foreignKey: 'user_id', as: 'pontuation_user'})
    }
}

module.exports = Pontuation;