const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
    );
    
  const apiInfo = await apiUrl.data.results.map((e) => {
    return {
      id: e.id,
      name: e.name,
      released: e.released,
      rating: e.rating,
      platforms: e.platforms.map((e) => e.platform.name),
      img: e.background_image,
    };
  });
  console.log(apiInfo)
  return apiInfo;
};

const getDbInfo = async () => {
  return await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllVideogames = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllVideogames,
};
