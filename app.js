const express = require('express');
const config = require('./config/config')
const constructorRouter = require('./routes/constructor.routes')

const app = express();

config(app)

app.use('/constructor', constructorRouter)

app.listen(3000, () => console.log('Started at port 3000'));
