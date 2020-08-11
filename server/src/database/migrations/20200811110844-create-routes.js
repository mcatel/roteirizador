'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('routes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
      },
      start_point: {
        type: Sequelize.GEOGRAPHY('POINT'),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('routes');
  }
};