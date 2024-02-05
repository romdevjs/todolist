const UsersService = require('./UsersService');

class UsersController {
  async registration(req, res) {
    try {
      const {email, password} = req.body;
      const reg = await UsersService.registration({email, password});
      return res.json(reg);
    } catch (e) {
      return res.status(401).json({error:e});
    }
  }

  async login(req, res) {
    try {
      const {email, password} = req.body;
      const log = await UsersService.login({email, password});
      return res.json(log);
    } catch (e) {
      return res.status(401).json({error:e});
    }
  }

  async logout(req, res) {
    try {
      const uid = req.uid;
      if (!uid) return res.status(403).json({message: 'User us not authorized!'});

      const data = await UsersService.logout(uid);
      return res.json(data);
    } catch (e) {
      return res.status(401).json({error:e});
    }
  }
}

module.exports = new UsersController();