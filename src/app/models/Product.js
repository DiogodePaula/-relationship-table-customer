import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        quantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        brand_uid: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'brand',
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
    this.belongsTo(models.Brand, {
      as: 'brand',
      foreignKey: 'brand_uid',
    });

    this.hasMany(models.Sale, {
      as: 'sales',
      foreignKey: 'uid',
    });
  }
}

export default Product;
