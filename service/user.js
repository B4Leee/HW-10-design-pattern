const UserRepository = require("../repositories/user");
const bcrypt = require("bcrypt");

class UserService {
  static async register(req) {
    const { email, gender, password, role } = req;
    const hashedPassword = bcrypt.hashSync(password, 8);

    console.log(email, gender, password, role + " INI Req SERVICE");

    try {
      const user = await UserRepository.register({
        email,
        gender,
        hashedPassword,
        role,
      });
      console.log(user + " User Service");
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserService;
