// const mainRout = require('./routes/main.routes');
const express = require("express");
const config = require("./config/config");
const registRoute = require("./routes/regist.route");
const loginRoute = require("./routes/login.route");
const mainRoute = require("./routes/mainRoute");
const logoutRoute = require("./routes/logout.route");

const app = express();
const PORT = process.env.PORT || 3000;
config(app);


config(app);

// app.use('/', mainRout);
app.use("/", mainRoute);
app.use("/regist", registRoute);
app.use("/login", loginRoute);
app.use("/main", mainRoute);
app.use("/logout", logoutRoute);

app.listen(3000, () => console.log("listen port 3000"));
