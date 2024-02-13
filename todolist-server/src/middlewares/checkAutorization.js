const TokensService = require('../tokens/TokensService');

module.exports = async function (req, res, next) {
  const access = req.cookies.access_token;
  if(!access) return res.json({message:'User is not authorized!'});

  const uid = await TokensService.checkUserByAccessToken(access);

  if(!uid) return res.json({message:'User is not authorized!'});
  req.uid = uid;
  next();
}