const router = require('express').Router();

const {
  Sock, User, Sock_season, Sock_size,
} = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    res.render('showAllSocks', { /* sock */ });
    let sock;
    console.log(Sock);
    try {
      sock = await Sock.findAll({
        raw: true,
        // defaultScope: {
        //   exclude: ['id_sock'],
        // },
        attributes: { exclude: ['id_sock'] },
        // order: ['id', 'DESC'],
      });
      // const users  = await User.findAll({raw: true
      //   // order: ['id', 'DESC'],
      // })
      // console.log(socks, users)npm
    } catch (error) {
      return res.render('error', {
        message: error,
      });
    }
    res.render('showAllSocks', { sock });
  });

module.exports = router;
