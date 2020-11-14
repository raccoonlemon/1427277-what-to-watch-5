import {films} from "../../mocks/films";
import {extend} from "../../utils/common";
import {ActionType} from "../action";

const initialState = {
  films,
  reviews: [],
  promoFilm: {},
  film: {},
  filteredFilms: films,
  favoriteFilms: []
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload});

    case ActionType.LOAD_FILM:
      return extend(state, {film: action.payload});

    case ActionType.LOAD_REVIEWS:
      return extend(state, {reviews: action.payload});

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: action.payload});

    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {favoriteFilms: action.payload});

    case ActionType.UPDATE_IS_MOVIE_FAVOTIRE:
      return extend(state, {favoriteFilms: action.payload});

    case ActionType.SET_FILM_INFO:
      return extend(state, {
        film: action.payload,
        films: state.films.map((item)=>action.payload.id === item.id ? action.payload : item),
        promoFilm: state.promoFilm.id === action.payload.id ? action.payload : state.promoFilm
      });
  }

  return state;
};
