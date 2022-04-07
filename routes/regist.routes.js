const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')

  .get(async (req, res) => {
    const { uid } = req.session;

    const user = uid && (await User.findByPk(Number(uid)));
    const isAuthorized = !!user;
    res.render('regist', { user, isAuthorized });
  })

  .post(async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ where: { user_email: email } });

    if (user) {
      res.send('Имя пользователя занято');
    } else {
      const newUser = new User({
        user_name: name,
        user_email: email,
        user_password: await bcrypt.hash(password, 10),
      });
      await newUser.save();

      req.session.uid = newUser.id;
      res.redirect('/');
    }
  });

module.exports = router;
