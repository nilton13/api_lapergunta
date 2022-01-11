const Pontuation = require('../models/Pontuation');
const User = require('../models/User');

module.exports = {
    async showByUser(req,res) {
        const {id} = req.params;

        const pontuation = await User.findByPk(id,{
            include: { association: 'pontuation_user' }    
        })

        return res.json(pontuation);
    },

    async create(req,res) {
        const user_id = req.params.id;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.json({ Error: 'Usuário não encontrado!' });
        }

        const pontuation = await Pontuation.create({ user_id });

        const pontuation_user = await Pontuation.findByPk(pontuation.id,{
            include: { association: 'pontuation_user' }    
        })

        return res.json(pontuation_user);
    }
    /*
    async update(req,res) {
        const { id } = req.params;


    }
    */
}