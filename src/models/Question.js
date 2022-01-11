const { Model, DataTypes } = require('sequelize');


class Question extends Model {
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
            pontuation: DataTypes.NUMBER
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.SubCategory,{ foreignKey: 'subcategory_id', as: 'question_sub'});  
        this.belongsTo(models.User,{ foreignKey: 'user_id', as: 'question_user'});          
        this.hasMany(models.Answer,{ foreignKey: 'question_id', as: 'answer_question'});          
    }
}

module.exports = Question;