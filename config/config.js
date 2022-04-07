
const express = require('express');
const path = require('path');
const hbs = require('hbs');


const config = (app) => {
  // нфиг для сессий отсутствует
  app.set('view engine', 'hbs');

  hbs.registerPartials(`${process.env.PWD}/views/partials`);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(process.env.PWD, 'public')));
};

module.exports = config;
