'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('users', { 
     id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     name:{
       type: Sequelize.STRING,
       allowNull: false
     },
     username:{
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
     email:{
       type: Sequelize.STRING,
       unique: true,
       allowNull: false
     },
     password:{
       type: Sequelize.STRING,
       allowNull: false
     },
     idade:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
     role:{
       type: Sequelize.STRING,
       default: 'usuario',
     },
     created_at:{
       type: Sequelize.DATE,
       allowNull: false
     },
     updated_at:{
      type: Sequelize.DATE,
      allowNull: false
    } 
    });
     
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('users');
     
  }
};
