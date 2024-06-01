// controllers/authController.js
const bcrypt = require("bcrypt");
const { User } = require("../models");

async function authenticate(req, res, next) {
  const { email, password } = req.headers;

  if (!email || !password) {
    return res.status(401).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      console.log(user);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authenticate;
