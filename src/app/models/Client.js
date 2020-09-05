import Sequelize, { Model } from 'sequelize';

class Client extends Model {
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
        cpf: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  // static associate(models) {
  //   this.belongsTo(models.Brand, {
  //     as: 'company',
  //     foreignKey: 'brand_uid',
  //   });
  //   this.hasMany(models.EmployeeRole, {
  //     as: 'roles',
  //     foreignKey: 'employee_uid',
  //   });
  // }
}

export default Client;
