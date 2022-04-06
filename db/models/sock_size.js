const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock_size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sock }) {
      Sock_size.belongsTo(Sock, { foreignKey: 'sock_size' });
    }
  }
  Sock_size.init({
    id_sock_size: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      references: {
        model: 'Socks',
        key: 'sock_size',
      },
    },
  }, {
    sequelize,
    modelName: 'Sock_size',
  });
  return Sock_size;
};
