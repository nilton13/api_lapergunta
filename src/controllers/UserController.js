const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = "07b2dabf885ce05a808ae8eb55363dde";

module.exports = {
    async index(req,res){
        const users = await User.findAll();

        return res.json(users);
    },

    async create(req,res){
        const { name,email,username, password, idade,role } = req.body;

        const emailExists = await User.findOne({
            where:{
                email
            }
        });

        if(emailExists){
            return res.json({ Error: 'Email já utilizado em outra conta!' });
        }

        const usernameExists = await User.findOne({
            where:{
                username
            }
        });

        if(usernameExists){
            return res.json({ Error: 'Nome de usuário já utilizado em outra conta!' });
        }

        const hash_password = await bcrypt.hash(password, 8);

        const user = await User.create({ name,email,username,password: hash_password, idade,role});

        return res.json(user);
    },

    async show(req,res){
        const { id } = req.params;

        const user = await User.findByPk(id);

        if(!user){
            return res.json({ Error: 'Usuário não encontrado!' });
        }

        return res.json(user);
    },

    async update(req,res){
        const { id } = req.params;
        const { name,email,username, password, idade,role } = req.body;

        const user = await User.findByPk(id);

        if(!user){
            return res.json({ Error: 'Usuário não encontrado!' });
        }

        if( user.name != name && name != undefined){
            user.name = name
        }
        if( user.email != email && email != undefined){
            user.email = email
        }
        if( user.username != username && username != undefined){
            user.username = username
        }
        if( user.password != password && password != undefined){
            password.name = password
        }
        if( user.idade != idade && idade != undefined){
            user.idade = idade
        }
        if( user.role != role && role != undefined){
            password.role = role
        }

        return res.json(user);

    },

    async delete(req,res){
        const { id } = req.params;

        const user = await User.findByPk(id);

        if(!user){
            return res.json({ Error: 'Usuário não encontrado!' });
        }

        await User.destroy(user);

        return res.json({ message: 'Usuário deletado com sucesso!' });
    },

    async login(req,res) {
        const { username, password } = req.body;

        const userNameExists = await User.findOne({
            where:{
                username
            }
        });

        if(!userNameExists){
            return res.json({ Error: 'Não há uma conta vinculada a este usuário!' });
        }

        console.log(userNameExists.password);

        const checkPassword = await bcrypt.compare(password, userNameExists.password);

        if(!checkPassword){
            return res.json({ Error: 'Usuário/senha inválidos!' });
        }

        const token = await jwt.sign({
            id: userNameExists.id
        }, secret);

        return res.json({ msg: 'Autenticação realizada com sucesso!', token });
    }
}