'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('pontuations', { 
     id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     questions_answ:{
       type: Sequelize.INTEGER,
       default: 0
     },
     questions_corre:{
      type: Sequelize.INTEGER,
      default: 0
     },
     pontuation_total:{
       type: Sequelize.INTEGER,
        default: 0
     },
     user_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model:'users', key: 'id'},
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
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
   return queryInterface.dropTable('pontuations');
     
  }
};
