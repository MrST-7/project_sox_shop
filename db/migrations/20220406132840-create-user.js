module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sock_seasons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_sock_season: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable('Sock_sizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_sock_size: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable('Socks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,

      },
      sock_name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      sock_size: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sock_sizes',
          key: 'id',
        },
      },
      sock_season: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sock_seasons',
          key: 'id',
        },
      },
      sock_isApproved: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      sock_img: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      user_email: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false,
      },
      user_password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      user_isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable('Baskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_user: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      id_sock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Socks');
    await queryInterface.dropTable('Sock_seasons');
    await queryInterface.dropTable('Sock_sizes');
    await queryInterface.dropTable('Baskets');
    await queryInterface.dropTable('Users');
  },
};
