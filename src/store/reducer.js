import {ALL_GENRES_FILTER} from "../const";
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
  }

  return state;
};
