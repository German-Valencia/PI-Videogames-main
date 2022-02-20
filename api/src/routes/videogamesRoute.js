const express = require("express");
const { getAllVideogames } = require("./functions");

const router = express.Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  const videogamesTotal = await getAllVideogames();
  if (name) {
    let videogameName = await videogamesTotal.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    videogameName.length
      ? res.status(200).send(videogameName)
      : res.status(404).send("Video game not found");
  } else {
    res.status(200).send(videogamesTotal);
  }
});


module.exports = router