const express = require('express');
const hbs = require('hbs');
<<<<<<< HEAD

=======
const path = require('path');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const cookieParser = require('cookie-parser');

const FileStore = sessionFileStore(session);
>>>>>>> 683538fd52cb97210a3a018facc007dd6b5f2f20

const config = (app) => {
  app.set('view engine', 'hbs');
  app.set('views', path.join(process.env.PWD, 'views'));

  hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(process.env.PWD, 'public')));
<<<<<<< HEAD

=======
  app.use(cookieParser());
  app.use(
    session({
      store: new FileStore({ secret: 'secret' }),
      name: 'user_sid',
      key: app.get('session cookie name'),
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 10e3 * 60, httpOnly: true },
    }),
  );
>>>>>>> 683538fd52cb97210a3a018facc007dd6b5f2f20
};

module.exports = config;
