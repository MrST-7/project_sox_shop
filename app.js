const express = require("express");
const config = require("./config/config");
const registRoute = require("./routes/regist.route");
const loginRoute = require("./routes/login.route");
const mainRoute = require("./routes/mainRoute");
const logoutRoute = require("./routes/logout.route");

const app = express();

config(app);

app.use("/", mainRoute);
app.use("/regist", registRoute);
app.use("/login", loginRoute);
app.use("/main", mainRoute);
app.use("/logout", logoutRoute);

app.listen(3000, () => console.log("listen port 3000"));
