import {ALL_GENRES_FILTER} from "../const";
import {extend} from "../utils/common";
import {getFilmsByGenre} from "../utils/films";
import {ActionType} from "./action";

const initialState = {
  genreFilter: ALL_GENRES_FILTER,
  films: [],
  filteredFilms: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {genreFilter: action.payload});

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {films: getFilmsByGenre(action.payload)});

    case ActionType.FILTER_FILMS_BY_GENRE:
      // пример сложной сортировки https://codesandbox.io/s/filter-90eig
      return extend(state, {
        filteredFilms: state.films.filter(film => film.genre === state.genreFilter)
      }
    );
  }

  return state;
};
