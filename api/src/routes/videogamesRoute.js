const express = require("express");
const { getAllVideogames } = require("./functions");
const { Videogame, Genre, Platform } = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  const videogamesTotal = await getAllVideogames();
  if (name) {
    let videogameName = videogamesTotal.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    videogameName.length
      ? res.status(200).send(videogameName)
      : res.status(404).send("Video game not found");
  } else {
    res.status(200).send(videogamesTotal);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const videogamesTotal = await getAllVideogames();
  if (id) {
    let videogamesId = videogamesTotal.filter((e) => e.id.toString() === id);
    videogamesId.length
      ? res.status(200).json(videogamesId)
      : res.status(404).send("Video game not found");
  } else {
    res.status(200).send(videogamesTotal);
  }
});

router.post("/", async (req, res) => {
  let { name, description, released, rating, platforms, genre, img } = req.body;
  try {
    if (name) {
      const allVideoGame = await getAllVideogames();
      const isVideogame = allVideoGame.find(
        (e) => e.name.toLowerCase() === name.toLowerCase()
      );
      if (!isVideogame) {
        const videogame = await Videogame.create({
          name,
          description,
          released,
          rating,
          img,
          platforms,
          genre,
        });
        const genreDb = await Genre.findAll({
          where: { name: genre },
        });

        const platformDb = await Platform.findAll({
          where: { name: platforms },
        });
        await videogame.addGenre(genreDb), videogame.addPlatform(platformDb);
        res.status(201).send("Video Game created successfully");
      }
      res.status(404).send("Videogame name already exist");
    }
    if (!name) return res.status(404).send("Videogame name is obligtory");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
