class UsersService {
  async registration({email, password}) {
    return `registration email:${email} password: ${password}`;
  }

  async login({email, password}) {
    return `login email:${email} password: ${password}`;
  }

  async logout() {
    return `logout`;
  }
}

module.exports = new UsersService();