import User from "../models/User.js";
import Role from "../models/Role.js";

class AuthService {
  async findUser(login) {
    const user = await User.findOne({ login });
    return user;
  }
  async createUser(login, hashPassword, role) {
    const newUser = await User.create({
      login,
      password: hashPassword,
      roles: [role],
    });
    return newUser;
  }

  async findRole(role) {
    const res = await Role.findOne({value:role})
    return res;
  }
}

export default new AuthService();
