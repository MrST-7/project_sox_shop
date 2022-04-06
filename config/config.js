const express = require('express')
const path = require('path')
const hbs = require('hbs')
const logger = require('logger')

const config = (app) => {
  app.set('view engine', 'hbs');
  
  app.use(express.urlencoded({extended:true}))
  app.use(express.json())
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(logger('dev'))
}
module.exports = config