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
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'brand-uid',
    });
    this.belongsTo(models.Client, {
      as: 'clients',
      foreignKey: 'client_uid',
    });
  }
}

export default Sale;
