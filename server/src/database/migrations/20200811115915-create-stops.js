module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('stops', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    route_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'routes',
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    latitude: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    longitude: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('stops'),
};
