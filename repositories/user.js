const { User } = require("../models");

class UserRepository {
  static async register(req, res, next) {
    try {
      const { email, gender, hashedPassword, role } = req;
      console.log(email, gender, hashedPassword, role + " INI REPOOO");

      const user = await User.create({
        email,
        gender,
        password: hashedPassword,
        role,
      });
      console.log(user + " INI REPOO");
      return user;
    } catch (err) {
      // console.error("Error in UserRepository:", err);
      // console.error(err);
      next(err);
    }
  }
}

module.exports = UserRepository;
