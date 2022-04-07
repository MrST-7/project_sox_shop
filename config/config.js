const express = require('express')
const path = require('path')
const hbs = require('hbs')

const config = (app) => {
  app.set('view engine', 'hbs');

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(express.static(path.join(__dirname, 'public')))

}
module.exports = config;
