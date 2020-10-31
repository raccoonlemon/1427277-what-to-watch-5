import {ALL_GENRES_FILTER, SHOWN_FILMS_INITIAL_COUNT} from "../const";
import {extend} from "../utils/common";
import {ActionType} from "./action";

const initialState = {
  currentGenre: ALL_GENRES_FILTER,
  films: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CURRENT_GENRE:
      return extend(state, {currentGenre: action.payload});

    case ActionType.SET_FILTERED_FILMS_BY_GENRE:
      return extend(state, {filteredFilms: state.films.filter((film) => {
        return Array.isArray(film.genre)
          ? film.genre.includes(state.currentGenre)
          : film.genre === state.currentGenre;
      }
      )});

    case ActionType.INCREASE_SHOWN_FILMS_COUNT:
      return extend(state, {shownFilmsCount: state.shownFilmsCount + action.payload});

    case ActionType.RESET_SHOWN_FILMS_COUNT:
      return extend(state, {shownFilmsCount: SHOWN_FILMS_INITIAL_COUNT});
  }

  return state;
};
