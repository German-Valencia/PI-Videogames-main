import {
  GET_VIDEOGAMES,
  CLEAN_VIDEOGAMES,
  GET_VIDEOGAME_NAME,
  GET_ALL_GENRES,
  GET_ALL_PLATFORMS,
  FILTER_CREATED,
  ORDER_NAME,
  FILTER_GENRE,
  ORDER_RATING,
  POST_VIDEOGAME,
  GET_DETAILS,
  CLEAN_DETAIL,  
} from "../actions";

const initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
  platforms: [],
  videogameDetail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };

    case CLEAN_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };

    case GET_ALL_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
      case GET_ALL_PLATFORMS:
        return{
          ...state,
          platforms: action.payload,
        }
    case FILTER_CREATED:
      let copy = state.allVideogames;
      let createdFiltered;
      if (action.payload === "created") {
        createdFiltered = copy.filter((e) => e.createdInDb);
      } else if (action.payload === "api") {
        createdFiltered = copy.filter((e) => !e.createdInDb);
      } else {
        createdFiltered = copy;
      }
      return {
        ...state,
        videogames: createdFiltered,
      };
    case FILTER_GENRE:
      let copyTwo = state.allVideogames;
      let genreFiltered =
        action.payload === "all"
          ? copyTwo
          : copyTwo.filter((e) => {
              if (!e.createdInDb) {
                if (e.genres.some((e) => e === action.payload)) {
                  return e;
                }
              } else if (e.createdInDb) {
                if (e.genres.some((e) => e.name === action.payload)) {
                  return e;
                }
              }
              return false;
            });
      if (genreFiltered.length <= 0) {
        genreFiltered = copyTwo;
        alert("There are no videogames of the indicated genre");
      }
      return {
        ...state,
        videogames: genreFiltered,
      };
    case ORDER_NAME:
      let copy3 = state.videogames;
      let sortedName =
        action.payload === "asc"
          ? copy3.sort((a, b) => {
              return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            })
          : copy3.sort((a, b) => {
              return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
            });
      return {
        ...state,
        videogames: sortedName,
      };
    case ORDER_RATING:
      let copy4 = state.videogames;
      let sortedRating =
        action.payload === "asc"
          ? copy4.sort((a, b) => a.rating - b.rating)
          : copy4.sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        videogames: sortedRating,
      };
    case GET_VIDEOGAME_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        videogameDetail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload,
      };
    case POST_VIDEOGAME:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
