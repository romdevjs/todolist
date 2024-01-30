const UsersService = require('./UsersService');

class UsersController {
  async registration(req, res) {
    const {email, password} = req.body;
    const reg = await UsersService.registration({email, password});
    return res.json(reg);
  }

  async login(req, res) {
    const {email, password} = req.body;
    const log = await UsersService.login({email, password});
    return res.json(log);
  }

  async logout(req, res) {
    const data = await UsersService.logout();
    return res.json(data);
  }
}

module.exports = new UsersController();