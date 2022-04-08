const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Basket, Sock_size, Sock_season }) {
      Sock.belongsTo(Basket, { foreignKey: 'id_sock' });
      Sock.belongsTo(Sock_size, { foreignKey: 'sock_size' });
      Sock.belongsTo(Sock_season, { foreignKey: 'sock_season' });
    }
  }
  Sock.init({
    sock_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sock_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Sock_sizes',
        key: 'id',
      },
    },
    sock_season: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Sock_seasons',
        key: 'id',
      },
    },
    sock_isApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};
