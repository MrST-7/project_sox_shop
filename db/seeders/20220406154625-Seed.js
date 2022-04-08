module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Sock_seasons', [{
      id_sock_season: 'Зима',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id_sock_season: 'Весна',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id_sock_season: 'Лето',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id_sock_season: 'Осень',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Sock_sizes', [{
      id_sock_size: 38,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id_sock_size: 39,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id_sock_size: 40,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id_sock_size: 41,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Users', [{
      user_name: 'admin',
      user_email: 'admin@mail.ru',
      user_password: 'admin',
      user_isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_name: 'fedor',
      user_email: 'fedor@mail.ru',
      user_password: 'fedor',
      user_isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Socks', [{
      sock_name: 'Клевый true',
      sock_size: 2,
      sock_season: 3,
      sock_isApproved: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      sock_name: 'Клевый false',
      sock_size: 2,
      sock_season: 3,
      sock_isApproved: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sock_name: 'Рождественский',
      sock_size: 2,
      sock_season: 3,
      sock_isApproved: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sock_name: 'Зенит - чемпион!',
      sock_size: 4,
      sock_season: 3,
      sock_isApproved: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sock_name: 'Keep calm and code it',
      sock_size: 2,
      sock_season: 1,
      sock_isApproved: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sock_name: 'Mama pomogi',
      sock_size: 1,
      sock_season: 3,
      sock_isApproved: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sock_name: 'Так работает JS',
      sock_size: 2,
      sock_season: 3,
      sock_isApproved: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sock_name: 'Ээээ',
      sock_size: 2,
      sock_season: 4,
      sock_isApproved: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Socks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Sock_sizes', null, {});
    await queryInterface.bulkDelete('Sock_seasons', null, {});
    await queryInterface.bulkDelete('Basket', null, {});
  },
};
