const express = require('express');
const config = require('./config/config');

const app = express();
config(app);

app.listen(3000, () => console.log('Started at port 3000'));
