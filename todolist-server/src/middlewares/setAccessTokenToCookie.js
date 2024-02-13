module.exports = function (req, res, next, token) {
  const expires = new Date(Date.now() + (24 * 60 * 60 * 1000));
  res.cookie('access_token', token, {expires, httpOnly: true, secure: true});
  next();
}