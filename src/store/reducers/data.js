import { films } from "../../mocks/films";
import { generateMockReviews } from "../../mocks/reviews";
import { extend } from "../../utils/common";
import { ActionType } from "../action";

// TODO: Убрать моковые отзывы после реализации их загрузки с сервера.
const reviews = generateMockReviews(films);
const initialState = {
  films,
  reviews,
  promoFilm: {},
  filteredFilms: films
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload});

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: action.payload});

  }

  return state;
};
