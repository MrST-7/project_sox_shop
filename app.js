const express = require('express');

const config = require('./config/config')

const mainRouter = require('./routes/main.routes');

const app = express();

config(app);

app.use('/', mainRouter)

app.listen(3000, () => console.log('Started at port 3000'));

//
