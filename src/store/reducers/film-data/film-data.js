import {films} from "../../../mocks/films";
import {generateMockReviews} from "../../../mocks/reviews";
import {extend} from "../../../utils/common";
import {ActionType} from "../../action";

const reviews = generateMockReviews(films);
const initialState = {
  films,
  reviews,
  filteredFilms: films
};

export const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload});

    case ActionType.SET_FILTERED_FILMS_BY_GENRE:
      return extend(state, {filteredFilms: state.films.filter((film) => {
        return Array.isArray(film.genre)
          ? film.genre.includes(action.payload)
          : film.genre === action.payload;
      }
      )});
  }

  return state;
};
