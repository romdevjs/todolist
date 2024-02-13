const TokensService = require('../tokens/TokensService');

module.exports = async function (req, res, next) {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) return res.status(401).json({message: 'User is not authorized!'});
    const refresh = authorization.split(' ')[1];
    const uid = await TokensService.checkUserByRefreshToken(refresh);
    if (!uid) return res.json({message: 'User is not authorized!'});
    req.uid = uid;
    next();
  } catch (e) {
    throw e;
  }
}