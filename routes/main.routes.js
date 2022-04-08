const router = require("express").Router();
const HBS = require("hbs");

const { Sock, User, Sock_season, Sock_size } = require("../db/models");

router.route("/").get(async (req, res) => {
  let sock;

  try {
    sock = await Sock.findAll({
      raw: true,
      // order: ['id', 'DESC'],
    });
    // const users  = await User.findAll({raw: true
    //   // order: ['id', 'DESC'],
    // })
  } catch (error) {
    return res.render("error", {
      message: error,
    });
  }

  res.render("showAllSocks", { sock });
});

router.route("/").get(async (req, res) => {
  let sock;
  console.log(Sock);
  try {
    sock = await Sock.findAll({
      raw: true,
      where: {
        sock_isApproved: true,
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
  res.render("showAllSocks", { sock });
});

module.exports = router;
