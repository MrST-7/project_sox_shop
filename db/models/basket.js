const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Sock }) {
      Basket.belongsTo(User, { foreignKey: 'id_user' });
      Basket.hasMany(Sock, { foreignKey: 'id_sock' });
    }
  }
  Basket.init({
    id_user: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    id_sock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
