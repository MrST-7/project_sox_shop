const router = require('express').Router();
const {
  Sock, Basket, Sock_season, Sock_size,
} = require('../db/models');

router
  .get('/', async (req, res) => {
    try {
      const { uid } = req.session;
      // console.log(req.session);
      // console.log(uid);
      const basketId = await Basket.findAll({ where: { id_user: uid }, raw: true /* include: [Sock, Sock_season, Sock_size]  */ });
      // console.log(basketId);
      res.render('basket', { basketId }); // fetch
    } catch (error) {
      res.send(error); // fetch
    }
  })
  .get('/remove/:id', async (req, res) => {
    try {
      const { uid } = req.session;
      const sockId = req.params.id;
      console.log('ЭТО ПАРАМЕТРЫ ПОЛЬЗОВАТЕЛЯ И НОСКА', uid, sockId);
      const basketId = await Basket.destroy({ where: { id_user: uid, id_sock: sockId } });
      console.log('DELETE', basketId);
      res.redirect('/basket');
    } catch (error) {
      res.send(error); // fetch
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const { uid } = req.session;

      const sockId = req.params.id;
      console.log('ЭТО ПАРАМЕТРЫ ПОЛЬЗОВАТЕЛЯ И НОСКА', uid, sockId);
      const basketId = await Basket.create({ id_user: uid, id_sock: sockId });
      res.redirect('/basket');
    } catch (error) {
      res.send(error); // fetch
    }
  });
module.exports = router;
