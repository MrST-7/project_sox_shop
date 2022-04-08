const router = require('express').Router();
const { isSession, isNotSession } = require('../middleware');
const { Basket } = require('../db/models');

router.route('/')
  .get(isSession, async (req, res) => {
    const { uid } = req.session;
    const basketId = await Basket.findAll({ where: { id_user: uid }, raw: true });

    res.render('basket', basketId);
  })
  .get(isSession, async (req, res) => {
    const { uid } = req.session;
    const basketId = await Basket.findAll({ where: { id_user: uid }, raw: true });

    res.render('basket', basketId);
  });
