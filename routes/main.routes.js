const router = require('express').Router();

const { Sock, User } = require('../db/models');


router
  .route('/')
  .get(async (req, res) => {
    let socks;
    console.log(Sock)
    try {
      socks = await Sock.findAll({raw: true
        // order: ['id', 'DESC'],
      });
      const users  = await User.findAll({raw: true
        // order: ['id', 'DESC'],
      })
      console.log(socks, users)
    } catch (error) {
      return res.render('error', {
        message: error,
      })
    }
    res.render('showAllSocks', { socks });
  });

module.exports = router;
