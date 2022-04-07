const express = require('express');
const config = require('./config/config');
const mainRout = require('./routes/main.routes');

const config = require('./config/config')

const mainRouter = require('./routes/main.routes');

const app = express();
const PORT = process.env.PORT || 3000;
config(app);


app.use('/', mainRouter)
app.use('/', mainRout);



app.listen(3000, () => console.log('Started at port 3000'));
