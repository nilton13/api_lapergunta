const Category = require('../models/Category');

module.exports = {
    async index(req,res) {
        const categories = await Category.findAll();

        return res.json(categories);
    },

    async create(req,res) {
        const { name, media_pontuation } = req.body;
        
        const nameExists = await Category.findOne({
            where:{
                name
            }
        });

        if(nameExists){
            return res.json({ Error: 'Categoria já cadastrada!' });
        }

        const category = await Category.create( { name, media_pontuation });

        return res.json(category);
    }

}