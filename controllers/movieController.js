const { Movie } = require("../models");

class MovieController {
  static async get(req, res, next) {
    try {
      const movie = await Movie.findAll();

      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const movie = await Movie.finByPk(id);

      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  }

  static async upload(req, res, next) {
    const { id } = req.params;
    const file = req.file;

    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(400).json({
        message: "no movie with id = " + id + " found!",
      });
    }

    if (!file) {
      return res.status(400).json({
        message: "no image detected",
      });
    }

    const newImageUrl = `http://localhost:3000/upload/${file.filename}`;

    Movie.update(
      {
        photo: newImageUrl,
      },
      { where: { id: id } }
    );

    res.status(201).json({ message: "success updating profile picture" });
  }
}

module.exports = MovieController;
