'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('answers', { 
     id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     description:{
       type: Sequelize.STRING,
       allowNull: false,
       unique: true
     },
     correct:{
       type: Sequelize.BOOLEAN, 
       default: false
     },
     question_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'questions', key: 'id' },
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
   return queryInterface.dropTable('answers');
     
  }
};
