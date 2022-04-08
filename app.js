const express = require('express');
const config = require('./config/config');
const registRoute = require('./routes/regist.routes');
const loginRoute = require('./routes/login.routes');
// const mainRoute = require('./routes/mainoutes');
const logoutRoute = require('./routes/logout.routes');
const mainRouter = require('./routes/main.routes');
const sockRouter = require('./routes/sock.routes');

const app = express();
config(app);

app.listen(3000, () => console.log('Started at port 3000'));
