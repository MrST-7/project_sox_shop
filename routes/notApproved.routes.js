const router = require("express").Router();

const { Sock, User, Sock_season, Sock_size } = require("../db/models");

// router.route("/").get((req, res) => res.render("admin"));
router.route("/").get(async (req, res) => {
  let sock;
  try {
    sock = await Sock.findAll({
      raw: true,
      where: {
        sock_isApproved: false,
      },
    });
  } catch (error) {
    return res.render("error", {
      message: error,
    });
  }
  res.render("notApproved", { sock });
});

router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const sock = await Sock.update(
      {
        sock_isApproved: true,
      },
      { where: { id } }
    );

    const updatedSocks = await Sock.findAll({
      raw: true,
      where: {
        sock_isApproved: false,
      },
    });

    res.render("soxCardApproved", { layout: false, updatedSocks });
  })
  .delete(async (req, res) => {
    const { id } = req.params;

    await Sock.destroy({ where: { id } })
    
    const updatedSocks = await Sock.findAll({
      raw: true,
      where: {
        sock_isApproved: false,
      },
    });

    res.render("soxCardApproved", { layout: false, updatedSocks });
  });

module.exports = router;
