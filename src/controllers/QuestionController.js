const Question = require('../models/Question');
const User = require('../models/User');
const SubCategory = require('../models/SubCategory');

module.exports = {
    async create(req,res) {
        const user_id = req.params.id;
        const { title,pontuation, subcategory_id } = req.body;

        const titleExists = await Question.findOne({
            where:{
                title,
                subcategory_id
            }
        });

        if(titleExists) {
            return res.json({ Error: 'Pergunta já existe!' });
        }

        const question = await Question.create({ title,pontuation,subcategory_id,user_id });

        return res.json(question);
    },

    async showByUser(req,res) {
        const user_id = req.params.id;

        const questions = await User.findByPk(user_id,{
            include:{ association: 'question_user' }
        });

        return res.json(questions);
    },

    async showBySubCategory(req,res) {
        const subcategory_id = req.params.id;

        const questions = await SubCategory.findByPk(subcategory_id,{
            include:{ association: 'question_sub' }
        });

        return res.json(questions);
    },
}