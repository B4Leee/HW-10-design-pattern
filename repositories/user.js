const { User } = require("../models");

class UserRepository {
  static async register(req) {
    try {
      const { email, gender, hashedPassword, role } = req;
      console.log(email, gender, hashedPassword, role + " INI Req REPOOO");

      const user = await User.create({
        email,
        gender,
        password: hashedPassword,
        role,
      });
      console.log(user + " INI REPOO");
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserRepository;
