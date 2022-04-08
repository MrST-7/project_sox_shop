const isSession = (req, res, next) => {
  console.log(req.session);
  if (req.session.user) {
    res.locals.user = req.session.user;
    res.locals.isSession = true;
  } else {
    res.locals.isSession = false;
  }
  next();
};
module.exports = isSession;
