module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      uid: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      total_price: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      quantity_of_itens: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      client_uid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'clients',
          key: 'uid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  },
};
