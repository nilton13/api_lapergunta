'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('questions', { 
     id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     title:{
       type: Sequelize.STRING,
       allowNull: false
     },
     pontuation:{
       type: Sequelize.INTEGER, 
       default: 10
     },
     subcategory_id:{
       type: Sequelize.INTEGER,
       allowNull: false,
       references: { model: 'sub_categories', key: 'id' },
       onDelete: 'CASCADE',
       onUpdate: 'CASCADE'
     },
     user_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
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
   return queryInterface.dropTable('questions');
     
  }
};
