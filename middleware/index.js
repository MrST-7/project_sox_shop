const isSession = (req, res, next) => {
  if (req.session.uid) {
    next();
  } else {
    res.redirect('/');
  }
};

const isNotSession = (req, res, next) => {
  if (req.session.uid) {
    res.redirect('/regist');
  } else {
    next();
  }
};

module.exports = { isSession, isNotSession };
