const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Basket }) {
      User.hasOne(Basket, { foreignKey: 'id_user' });
    }
  }
  User.init({
    user_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
