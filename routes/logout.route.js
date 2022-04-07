const router = require("express").Router();

router.get("/", (req, res) => {
  // удаляем сессию
  req.session.destroy();
  res.redirect("/main");
});

module.exports = router;
