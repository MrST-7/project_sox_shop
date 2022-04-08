const router = require('express').Router();

const {
  Sock, User, Sock_season, Sock_size,
} = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    res.render('showAllSocks', { /* sock */ });
  });

module.exports = router;
