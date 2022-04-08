const router = require('express').Router()
const { Sock } = require('../db/models')

router.route('/')
    .get((req, res) => {
        res.render('constructor')
    })

router.route('/new')
    .post(async (req, res) => {
        const {sock_name, sock_size, sock_season, sock_img } = req.body
        const sock = await Sock.create({sock_name, sock_size, sock_season, sock_img: sock_img, sock_isApproved: false })

        res.json(sock)
    })

module.exports = router
