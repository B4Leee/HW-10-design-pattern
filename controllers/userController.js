const UserService = require("../service/user");
const { User } = require("../models");
const { where } = require("sequelize");

class UserController {
  static async register(req, res, next) {
    const { email, gender, password, role } = req.body;
    console.log(email + " Email Req Controller");
    try {
      const user = await UserService.register({
        email,
        gender,
        password,
        role,
      });
      console.log(user + " INI Controller");
      res.status(201).json(user);
    } catch (error) {
      // console.error(erro);
      next(error);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      next(error);
    }
  }

  static async get(req, res, next) {
    try {
      const user = await User.findAll();

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;
    await User.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: `Data berhasil di hapus By ID = ${id}`,
    });
  }
}

module.exports = UserController;
