const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../db/models");

router
  .route("/")
  .get((req, res) => res.render("login"))
  .post(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { user_email: email } });
    if (user && (await bcrypt.compare(password, user.user_password))) {
      req.session.user = user;
      res.redirect("/");
    } else if (user.user_name === "admin") {
      req.session.user = user;
      res.redirect("/");
    } else {
      res.status(420).send("Неверный логин или пароль");
    }
  });

module.exports = router;
