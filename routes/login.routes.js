const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

// router.route("/").get(async (req, res) => {
//   const { uid } = req.session;
//   const user = uid && (await User.findByPk(Number(uid)));
//   const isAuthorized = !!user;
//   res.render("login", { user, isAuthorized });
// });

router
  .route('/')
  .get((req, res) => res.render('login'))
  .post(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { user_email: email } });
    // console.log(`${password}`, `has${user.password}`);
    if (user && (await bcrypt.compare(password, user.user_password))) {
      req.session.uid = user.id;
      res.redirect('/');
    } else {
      res.status(420).send('Неверный логин или пароль');
    }
  });

module.exports = router;
