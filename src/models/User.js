const { Model, DataTypes } = require('sequelize');


class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            idade: DataTypes.NUMBER,
            role: DataTypes.STRING            
        },{
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Pontuation, { foreignKey:'user_id', as: 'pontuation_user' })
        this.hasMany(models.Question, { foreignKey:'user_id', as: 'question_user' })
    }
}

module.exports = User;
