const router = require("express").Router();

const { Sock, User, Sock_season, Sock_size } = require("../db/models");

// router.route("/").get((req, res) => res.render("admin"));
router.route("/").get(async (req, res) => {
  let sock;
  console.log(Sock);
  try {
    sock = await Sock.findAll({
      raw: true,
      where: {
        sock_isApproved: false,
      },
      // order: ['id', 'DESC'],
    });
    // const users  = await User.findAll({raw: true
    //   // order: ['id', 'DESC'],
    // })
    // console.log(socks, users)npm
  } catch (error) {
    return res.render("error", {
      message: error,
    });
  }
  res.render("notApproved", { sock });
});

module.exports = router;
