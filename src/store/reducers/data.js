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
  }

  return state;
};
