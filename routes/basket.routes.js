const router = require('express').Router();
const { Basket } = require('../db/models');

// router.route('/')
//   .get(async (req, res) => {
//     const { uid } = req.session;
//     const basketId = await Basket.findAll({ where: { id_user: uid }, raw: true });

//     res.render('basket', basketId);
//   })
//   .get(async (req, res) => {
//     const { uid } = req.session;
//     const basketId = await Basket.findAll({ where: { id_user: uid }, raw: true });

//     res.render('basket', basketId);
//   });
