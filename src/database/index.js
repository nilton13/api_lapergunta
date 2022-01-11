const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Pontuation = require('../models/Pontuation');
const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');
const Question = require('../models/Question');
const Answer = require('../models/Answer');

const connection = new Sequelize(dbConfig);

User.init(connection);
Pontuation.init(connection);
Category.init(connection);
SubCategory.init(connection);
Question.init(connection);
Answer.init(connection);

User.associate(connection.models);
Pontuation.associate(connection.models);
Category.associate(connection.models);
SubCategory.associate(connection.models);
Question.associate(connection.models);
Answer.associate(connection.models);

module.exports = connection;