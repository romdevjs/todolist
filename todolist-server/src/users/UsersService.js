const {Users} = require('./UsersSchema');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const TokensService = require('../tokens/TokensService');

class UsersService {
  async registration({email, password}) {
    try {
      const candidate = await Users.findOne({email});

      if (!candidate) {
        const hashPassword = await bcrypt.hash(password, 8);
        const user = new Users({email, password: hashPassword});
        await user.save();
        const tokens = await TokensService.generateTokens(user);
        await Users.updateOne({email, tokens})
        return {id: user.id, tokens};
      } else {
        throw {message: 'User with such an email has already been registered!'};
      }
    } catch (e) {
      throw e;
    }
  }

  async login({email, password}) {
    try {
      const candidate = await Users.findOne({email});

      if (!candidate) throw {message: 'User with this email does not exist!'};

      const isPasswordCorrect = bcrypt.compareSync(password, candidate.password);

      if (!isPasswordCorrect) throw {message: 'Email or password is not correct!'};

      const tokens = await TokensService.generateTokens(candidate);
      await Users.updateOne({email}, {tokens});

      return {id: candidate.id, tokens};
    } catch (e) {
      throw e;
    }
  }

  async logout(uid) {
    try {
      const candidate = await Users.findById(uid);

      if (!candidate) throw {message: 'User is not found!'};

      const tokens = await TokensService.removeTokens();
      await Users.findOneAndUpdate({_id: uid}, {tokens});

      return {id: uid, tokens};
    } catch (e) {
      throw e;
    }
  }

  async refresh(uid) {
    try {
      const candidate = await Users.findById(uid);

      if (!candidate) throw {message: 'User is not found!'};

      const tokens = await TokensService.generateTokens(candidate);
      await Users.findOneAndUpdate({_id: uid}, {tokens});

      return {id: uid, tokens};
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new UsersService();