const TokensService = require('../tokens/TokensService');

module.exports = async function (req, res, next) {
  const authorization = req.headers.authorization;

  if(!authorization) return res.json({message:'User is not authorized!'});

  const access = authorization.split(' ')[1];
  const uid = await TokensService.checkUserByAccessToken(access);

  if(!uid) return res.json({message:'User is not authorized!'});
  req.uid = uid;
  next();
}