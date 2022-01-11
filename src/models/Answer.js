const { Model, DataTypes } = require('sequelize');


class Answer extends Model {
    static init(sequelize){
        super.init({
            description: DataTypes.STRING,
            correct: DataTypes.BOOLEAN
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Question,{ foreignKey: 'question_id', as: 'answer_question'});  
    }
}

module.exports = Answer;