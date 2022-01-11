const Answer = require('../models/Answer');
const Question = require('../models/Question');

module.exports = {
    async create(req,res) {
        const question_id = req.params.id;
        const { description, correct } = req.body;

        const descriptionExists = await Answer.findOne({
            where:{
                description
            }
        });

        if(descriptionExists){
            return res,json({ Error: 'Resposta já cadastrada!' });
        }

        const answer = await Answer.create({ description,correct,question_id });

        return res.json(answer);

    },

    async showByQuestion(req,res){
        const question_id = req.params.id;

        const answers = await Question.findByPk(question_id,{
            include:{ association: 'answer_question' }
        });

        return res.json(answers);
    },

    async update(req,res) {
        const { id } = req.params;
        const { description, correct } = req.body;

        const answerExists = await Answer.findByPk(id);

        if(!answerExists) {
            return res.json({ Error: 'Resposta não encontrada!' });
        }

        if(description != answerExists.description && description != undefined) {
            answerExists.description = description;
        }

        if(correct != answerExists.correct && correct != undefined) {
            answerExists.correct = correct;
        }

        return res.json(answerExists);
    }
}