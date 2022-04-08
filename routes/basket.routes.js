const router = require('express').Router();
const { Basket, Sock } = require('../db/models');

router
  .get('/', async (req, res) => {
    try {
      const { uid } = req.session;
      // console.log(req.session);
      // console.log(uid);
      const basketId = await Basket.findAll({ where: { id_user: uid }, raw: true, include: [Sock] });
      if (basketId) res.render('basket', basketId);
      else res.render('basket', basketId); // fetch
    } catch (error) {
      res.send(error); // fetch
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const { uid } = req.session;
      const sockId = req.params.id;
      const basketId = await Basket.create({ id_user: uid, id_sock: sockId });
      // console.log(uid, sockId);
      res.redirect('basket');
    } catch (error) {
      res.send(error); // fetch
    }
  });
module.exports = router;
