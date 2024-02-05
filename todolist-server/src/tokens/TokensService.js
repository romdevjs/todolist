const jwt = require("jsonwebtoken");
const {Users} = require("../users/UsersSchema");

class TokensService {
  async generateTokens(user) {
    try {
      if (user) {
        const payload = {id: user.id};
        const refresh = await jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET_KEY);
        const access = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY);
        return {refresh, access};
      } else {
        return {message: 'User is not found!'}
      }
    } catch (e) {
      throw e;
    }
  }

  async removeTokens() {
    try {
      return {
        refresh: '',
        access: ''
      }
    } catch (e) {
      throw e;
    }
  }

  async checkUserByAccessToken(access) {
    try {
      const decoded = jwt.verify(access, process.env.ACCESS_TOKEN_SECRET_KEY);

      if (!decoded) return null;

      const user = await Users.findById(decoded.id);
      if (!user) return null;

      return (!!user.tokens.access && user.tokens.access === access) ? user.id : null;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new TokensService();