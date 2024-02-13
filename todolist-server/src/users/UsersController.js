const UsersService = require('./UsersService');
const setAccessToken = require('../middlewares/setAccessTokenToCookie');

class UsersController {
  async registration(req, res, next) {
    try {
      const {email, password} = req.body;
      const response = await UsersService.registration({email, password});
      setAccessToken(req, res, next, response.tokens.access);
      return res.json({uid: response.id, refreshToken: response.tokens.refresh});
    } catch (e) {
      return res.status(401).json({error: e});
    }
  }

  async login(req, res, next) {
    try {
      const {email, password} = req.body;
      const response = await UsersService.login({email, password});
      setAccessToken(req, res, next, response.tokens.access);
      return res.json({uid: response.id, refreshToken: response.tokens.refresh});
    } catch (e) {
      return res.status(401).json({error: e});
    }
  }

  async logout(req, res) {
    try {
      const uid = req.uid;
      if (!uid) return res.status(403).json({message: 'User us not authorized!'});

      const data = await UsersService.logout(uid);
      return res.json(data);
    } catch (e) {
      return res.status(401).json({error: e});
    }
  }

  async refresh(req, res, next) {
    try {
      const response = await UsersService.refresh(req.uid);
      setAccessToken(req, res, next, response.tokens.access);
      return res.json({uid: response.id, refreshToken: response.tokens.refresh});
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new UsersController();