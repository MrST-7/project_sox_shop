// const mainRout = require('./routes/main.routes');
const express = require('express');
const config = require('./config/config');
const registRoute = require('./routes/regist.routes');
const loginRoute = require('./routes/login.routes');
// const mainRoute = require('./routes/mainoutes');
const logoutRoute = require('./routes/logout.routes');
const mainRouter = require('./routes/main.routes');
const sockRouter = require('./routes/sock.routes');
const isSession = require('./middlewars/isSession');

const app = express();
config(app);

// app.use('/', mainRout);

app.use('/', mainRouter);
app.use('/info', sockRouter);
app.use('/regist', registRoute);
app.use('/login', loginRoute);
// app.use('/main', mainRouter);
app.use('/logout', logoutRoute);

app.listen(3000, () => console.log('listen port 3000'));
// app.use('/', mainRouter)
// app.use('/', mainRout);
