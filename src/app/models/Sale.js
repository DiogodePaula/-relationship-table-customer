import Sequelize, { Model } from 'sequelize';

class Sale extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        total_price: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        quantity_of_items: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        client_uid: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'client',
            key: 'uid',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        product_uid: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'product',
            key: 'uid',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, {
      as: 'client',
      foreignKey: 'client_uid',
    });

    this.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'product_uid',
    });
  }
}

export default Sale;
