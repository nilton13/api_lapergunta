const { Model, DataTypes } = require('sequelize');


class Category extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            media_pontuation: DataTypes.NUMBER
        },{
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.SubCategory,{ foreignKey: 'category_id', as: 'category_sub'})
    }
}

module.exports = Category;