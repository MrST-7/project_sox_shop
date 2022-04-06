const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock_season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sock }) {
      Sock_season.belongsTo(Sock, { foreignKey: 'sock_season' });
    }
  }
  Sock_season.init({
    id_sock_season: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Sock_season',
  });
  return Sock_season;
};
