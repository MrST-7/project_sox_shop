const router = require("express").Router();

const { Sock, User, Sock_season, Sock_size } = require("../db/models");

router.get("/:id", async (req, res) => {
  let sock;
  try {
    sock = await Sock.findOne({
      where: { id: req.params.id },
      include: [Sock_season, Sock_size],
      raw: true,
    });
    const image = sock.sock_img
    const season = sock["Sock_season.id_sock_season"];
    const size = sock["Sock_size.id_sock_size"];
    return res.render("showOne", { sock, season, size, image });
  } catch (error) {
    return res.render("error", {
      message: error,
    });
  }
});
// router.get('/home', (req, res) => {
//   res.render('home');
// }

module.exports = router;
