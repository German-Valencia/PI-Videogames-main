const axios = require("axios");
const { Videogame, Genre, Platform } = require("../db");
const { API_KEY } = process.env;

const url = `https://api.rawg.io/api/games?key=${API_KEY}&page`;

const getApiInfo = async () => {
  let apiUrl1 = [],
    apiUrl2 = [],
    apiUrl3 = [];

  Promise.all([
    (apiUrl1 = await axios.get(`${url}_size=40`)),
    (apiUrl2 = await axios.get(`${url}=2&page_size=40`)),
    (apiUrl3 = await axios.get(`${url}=3&page_size=20`)),
  ]);

  let apiInfoTotal = [
    ...apiUrl1.data.results,
    ...apiUrl2.data.results,
    ...apiUrl3.data.results,
  ];

  const apiInfo = apiInfoTotal.map((e) => {
    return {
      id: e.id,
      name: e.name,
      released: e.released,
      rating: e.rating,
      genres: e.genres.map((e) => e.name),
      platforms: e.parent_platforms.map((e) => e.platform.name),
      img: e.background_image,
    };
  });
  return apiInfo;
};

const getVideogameDetail = async (arg) => {
  try {
    const apiData = await axios.get(
      `https://api.rawg.io/api/games/${arg}?key=${API_KEY}`
    );
    const data = await apiData.data;
    const videogameData = {
      id: data.id,
      name: data.name,
      released: data.released,
      rating: data.rating,
      genres: data.genres.map((e) => e.name),
      platforms: data.parent_platforms.map((e) => e.platform.name),
      img: data.background_image,
      description: data.description_raw,
    };

    return videogameData;
  } catch (e) {
    console.log(e);
  }
};

/* const getDbInfo = async () => {
  return await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
      model: Platform,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};  */

const getDbInfo = async () => {
  return await Videogame.findAll({
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Platform,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

const getAllVideogames = async () => {
  try {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllVideogames,
  getVideogameDetail,
};
