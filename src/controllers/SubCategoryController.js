const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

module.exports = {
    async showByCategory(req,res) {
        const category_id = req.params.id;

        const subcategories = await Category.findByPk(category_id,{
            include:{ association: 'category_sub' }
        })

        return res.json(subcategories);
    },

    async create(req,res) {
        const { name, media_pontuation, category_id } = req.body;

        const nameExists = await SubCategory.findOne({
            where:{
                name
            }
        });

        if(nameExists){
            return res.json({ Error: 'Categoria já cadastrada!' });
        } 

        const subCategory = await SubCategory.create({ name,media_pontuation,category_id });

        return res.json(subCategory);
    }
}