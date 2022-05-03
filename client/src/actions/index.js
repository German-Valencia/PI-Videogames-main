import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const CLEAN_VIDEOGAMES = "CLEAN_VIDEOGAMES";
export const GET_VIDEOGAME_NAME = "GET_VIDEOGAME_NAME";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const GET_ALL_PLATFORMS = "GET_ALL_PLATFORMS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_NAME = "ORDER_NAME";
export const FILTER_GENRE = "FILTER_GENRE";
export const ORDER_RATING = "FILTER_RATING";
export const POST_VIDEOGAME = "POST_VIDEOGAME";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getVideogames = () => {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: GET_VIDEOGAMES,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const cleanVideogames = (dispatch) => {
  return dispatch({
    type: CLEAN_VIDEOGAMES,
    payload: [],
  });
};

export const getAllGenres = () => {
  return async (dispatch) => {
    try {
      let json = await axios.get("http://localhost:3001/genres");
      return dispatch({
        type: GET_ALL_GENRES,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getAllPlatforms = () => {
  return async (dispatch) => {
    try {
      let json = await axios.get("http://localhost:3001/platforms");
      return dispatch({
        type: GET_ALL_PLATFORMS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

/* export const getAlltypes = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/types")
      .then((json) => json.data)
      .then((json) => dispatch({ type: GET_ALL_TYPES, payload: json }))
      .catch((e) => console.log(e));
  };
}; */

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

export const orderName = (payload) => {
  return {
    type: ORDER_NAME,
    payload,
  };
};

export const filterGenre = (payload) => {
  return {
    type: FILTER_GENRE,
    payload,
  };
};

export const filterRating = (payload) => {
  return {
    type: ORDER_RATING,
    payload,
  };
};

export const getVideogameByName = (payload) => {
  return async (dispatch) => {
    try {
      var json = await axios.get(
        `http://localhost:3001/videogames?name=${payload}`
      );
      return dispatch({
        type: GET_VIDEOGAME_NAME,
        payload: json.data,
      });
    } catch (e) {
      alert("Videogame not found");
      window.location.href = "http://localhost:3000/home";
      console.log(e);
    }
  };
};

/* export const getPokemonByName = (payload) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/pokemons?name=${payload}`)
      .then((json) => json.data)
      .then((json) => dispatch({ type: GET_POKEMON_NAME, payload: json }))
      .catch((e) => {
        alert("Pokemon not found");
        window.location.href = "http://localhost:3000/home";
        console.log(e);
      });
  };
}; */

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      let json = await axios.get(`http://localhost:3001/videogames/${id}`);
      return dispatch({
        type: GET_DETAILS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

/* export const getDetail = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/pokemons/${id}`)
      .then((json) => json.data)
      .then((json) => dispatch({ type: GET_DETAILS, payload: json }))
      .catch((err) => console.log(err));
  };
}; */

export const cleanDetail = (dispatch) => {
  return dispatch({
    type: CLEAN_DETAIL,
    payload: [],
  });
};

export const postVideogame = (payload) => {
  return async () => {
    try {
      var createVideogame = await axios.post(
        "http://localhost:3001/videogames",
        payload
      );
      alert("New videogame is created!");
      return createVideogame;
    } catch (e) {
      alert("Videogame name already exist");
      console.log(e);
    }
  };
};

/* export const postPokemon = (payload) => {
  return () => {
let createPoke = axios.post("http://localhost:3001/pokemons", payload);
alert("New pokemón is created!");
return createPoke;   
  };
}; */
