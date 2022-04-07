const router = require('express').Router();

const { Sock, User, Sock_season, Sock_size } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    let sock;
    console.log(Sock);
    try {
      sock = await Sock.findAll({
        raw: true,
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

router.get('/:id', async (req, res) => {
  let sock;
  try {
    // sock = await Sock.findOne({ where: { id: req.params.id }, include: [{ model: Sock_season, require: false, attributes: ["id_sock_season"] }] });
    sock = await Sock.findOne({ where: { id: req.params.id }, include: [Sock_season, Sock_size], raw:true });
    const season = sock['Sock_season.id_sock_season'];
    const size = sock['Sock_size.id_sock_size'];
    return res.render('showOne', { sock, season, size });
  } catch (error) {
    return res.render('error', {
      message: error,
    });
  }
  console.log('asdasdasdasd' , sock['Sock_season.id_sock_season']);
});

module.exports = router;
