const { Model, DataTypes } = require('sequelize');


class SubCategory extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            media_pontuation: DataTypes.NUMBER
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Category,{ foreignKey: 'category_id', as: 'category_sub'});
        this.hasMany(models.Question, { foreignKey:'subcategory_id', as: 'question_sub' })
    }
}

module.exports = SubCategory;