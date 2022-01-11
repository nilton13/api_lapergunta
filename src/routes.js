const { Router } = require('express');
const routes = Router();
const { celebrate, Joi, Segments } = require('celebrate');

// Middleware para verifiação de Login
const LoginAuth = require("./middlewares/LoginAuth");

//Controllers
const UserController = require('./controllers/UserController');
const PontuationController = require('./controllers/PontuationController');
const CategoryController = require('./controllers/CategoryController');
const SubCategory = require('./controllers/SubCategoryController');
const QuestionController = require('./controllers/QuestionController');
const AnswerController = require('./controllers/AnswerController');

//######################################################################################
//Rota de usuários
routes.get(
    '/users',
    UserController.index
)

routes.post(
    '/user',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
            role: Joi.string().default('usuario'),
            idade: Joi.number().required()
        }
    }),
    UserController.create    
);

routes.post(
    '/login',
    celebrate({
        [Segments.BODY]: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    }),
    UserController.login
)

//#########################################################################
//Rota de Pontuação

routes.post(
    '/pontuation/user/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.number().required(),
            questions_corre: Joi.number().default(0),
            questions_answ: Joi.number().default(0),
            pontuation_total: Joi.number().default(0),
        }
    }),
    PontuationController.create
);

routes.get(
    '/pontuation/user/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.number().required()
        }
    }),
    PontuationController.showByUser
);

//##########################################################################
//Rota de Categorias

routes.get('/categories', CategoryController.index);

routes.post(
    '/category',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            media_pontuation: Joi.number().default(0)
        }
    }),
    LoginAuth,
    CategoryController.create
);

//###############################################################################
//Rota de Subcategorias

routes.get(
    '/subcategories/category/:id',
    celebrate({
        [Segments.PARAMS]:{
            id: Joi.number().required()
        }
    }),
    SubCategory.showByCategory
)

routes.post(
    '/subcategory',
    celebrate({
        [Segments.BODY]:{
            name: Joi.string().required(),
            media_pontuation: Joi.number().default(0),
            category_id: Joi.number().required()
        }
    }),
    SubCategory.create
);

//###############################################################################
//Rotas de Questões

routes.post(
    '/user/:id/question',
    celebrate({
        [Segments.PARAMS]:{
            id: Joi.number().required()
        },
        [Segments.BODY]:{
            title: Joi.string().required(),
            pontuation: Joi.number().default(10),
            subcategory_id: Joi.number().required()
        }
    }),
    QuestionController.create
);

routes.get(
    '/user/:id/questions',
    celebrate({
        [Segments.PARAMS]:{
            id: Joi.number().required()
        }
    }),
    QuestionController.showByUser
);

//###################################################################################
//ROTA DE RESPOSTAS

routes.post(
    '/user/question/:id/answer',
    celebrate({
        [Segments.PARAMS]:{
            id: Joi.number().required()
        },
        [Segments.BODY]:{
            description: Joi.string().required(),
            correct: Joi.boolean().default(false),
        }
    }),
    AnswerController.create
);

routes.get(
    '/user/question/:id',
    celebrate({
        [Segments.PARAMS]:{
            id: Joi.number().required()
        },
    }),
    AnswerController.showByQuestion
);

routes.get(
    '/answer/:id',
    celebrate({
        [Segments.PARAMS]:{
            id: Joi.number().required()
        },
        [Segments.BODY]:{
            description: Joi.string(),
            correct: Joi.boolean().default(false),
        }
    }),
    AnswerController.update
)

module.exports = routes;