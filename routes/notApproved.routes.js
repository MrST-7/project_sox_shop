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

router.post("/notApproved/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const sock = await Sock.update({
    sock_isApproved: true,
    where: {
      id,
    },
  });
  try {
    res.redirect("notApproved");
  } catch (error) {
    res.send("error");
  }
});

module.exports = router;
